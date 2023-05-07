      // ----------------------------------------------------
      // Just copy/paste these functions as-is:

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

      // ----------------------------------------------------
      // Now modify this part of the code to fit your needs:

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

// The canvas stuff

function processImage(canvas) {
  // Convert on-screen image to something we can feed into our model.
  ctx = canvas.getContext('2d');
  const ctxScaled = document.getElementById('scaled-canvas').getContext('2d')
  ctxScaled.save();
  ctxScaled.clearRect(0, 0, ctxScaled.canvas.height, ctxScaled.canvas.width);
  ctxScaled.scale(14.0 / ctx.canvas.width, 14.0 / ctx.canvas.height)
  ctxScaled.drawImage(document.getElementById('canvas'), 0, 0)
  const data = ctxScaled.getImageData(0, 0, 14, 14)
  ctxScaled.restore();
  return data;
}

// Canvas setup
var canvas = new fabric.Canvas('canvas');
canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 10;
canvas.freeDrawingBrush.color = "##212529";
canvas.opacity = 0.5;
canvas.backgroundColor = "#ffffff";
canvas.renderAll();

// We don't want to do a prediction on every mouse move so we group
// the predictions according to the tuning variable movesPerPrediction.
var mouseMoveCount = 0;
var movesPerPrediction = 25;
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
  console.log("predicting");
  pixels = processImage(canvas);
  console.log("got pixels");
  console.log(pixels);
  sendDataToPython({
      value: pixels,
      dataType: "json",
   });
  console.log("done sending to python");
};
