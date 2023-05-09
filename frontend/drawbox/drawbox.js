////////////////////////////////////////////////////////////////////////////////

function sendMessageToStreamlitClient(type, data) {
  var outData = Object.assign({
    isStreamlitMessage: true,
    type: type,
  }, data);
  window.parent.postMessage(outData, "*");
}

function init() {
  sendMessageToStreamlitClient("streamlit:componentReady", {apiVersion: 1});
}

function setFrameHeight(height) {
  sendMessageToStreamlitClient("streamlit:setFrameHeight", {height: height});
}

// The `data` argument can be any JSON-serializable value.
function sendDataToPython(data) {
  sendMessageToStreamlitClient("streamlit:setComponentValue", data);
}

// Hook things up!
init();

// Hack to autoset the iframe height.
window.addEventListener("load", function() {
  window.setTimeout(function() {
    setFrameHeight(document.documentElement.clientHeight)
  }, 0);
});

// Optionally, if the automatic height computation fails you, give this component a height manually
// by commenting out below:
//setFrameHeight(200);

////////////////////////////////////////////////////////////////////////////////
// The canvas drawing stuff

// https://stackoverflow.com/questions/38048497/group-array-values-in-group-of-3-objects-in-each-array-using-underscore-js
function groupArr(data, n) {
    var group = [];
    for (var i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
    return group;
}

function processImage(canvas) {
  // Convert on-screen image to something we can feed into our model.
  // The dimensions of the resulting image is the size of the scaled-canvas element given in the html
  ctx = canvas.getContext('2d');

  // Scale down
  const ctxScaled = document.getElementById('scaled-canvas').getContext('2d')
  ctxScaled.save();
  ctxScaled.clearRect(0, 0, ctxScaled.canvas.height, ctxScaled.canvas.width);
  ctxScaled.scale(ctxScaled.canvas.width / ctx.canvas.width, ctxScaled.canvas.height / ctx.canvas.height)
  ctxScaled.drawImage(document.getElementById('canvas'), 0, 0)
  const imageData = ctxScaled.getImageData(0, 0, ctxScaled.canvas.width, ctxScaled.canvas.height)
  ctxScaled.restore();

  // Convert to grayscale between 0 and 1
  grayscale = [];
  for (i = 0; i * 4 < imageData.data.length; i++) {
    grayscale[i] = Math.round((1 - imageData.data[i * 4] / 255) * 1000) / 1000;
  }
  return groupArr(grayscale, ctxScaled.canvas.width);
}

// Canvas setup
var canvas = new fabric.Canvas('canvas');
canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 10;
canvas.freeDrawingBrush.color = "#000000";
canvas.backgroundColor = "#ffffff";
canvas.renderAll();

// We don't want to do a prediction on every mouse move so we group
// the predictions according to the tuning variable movesPerPrediction.
var mouseMoveCount = 0;
var movesPerPrediction = 50;
var drawing = false;

function onMouseMove() {
  if (drawing && mouseMoveCount++ > movesPerPrediction) {
    canvas.freeDrawingBrush._finalizeAndAddPath();
    (async () => { predict(); })();
    mouseMoveCount = 0;
  }
}

canvas.on('mouse:up',   () => {drawing = false; predict();});
canvas.on('mouse:down', () => {drawing = true;});
canvas.on('mouse:move', onMouseMove);

// Clear button callback
$("#clear-canvas").click(function(){
  canvas.clear();
  canvas.backgroundColor = "#ffffff";
  canvas.renderAll();
  $("#status").removeClass();
});


function predict(){
  pixels = processImage(canvas);
  console.log(pixels);
  sendDataToPython({ value: pixels});
  console.log(pixels);
  console.log("done sending to python");
};
