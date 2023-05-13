<script lang="ts">
	import { fabric } from 'fabric';

	import { onMount } from 'svelte';

	// https://stackoverflow.com/questions/38048497/group-array-values-in-group-of-3-objects-in-each-array-using-underscore-js
	function groupArr<Type>(data: Type[], n: number): Type[][] {
		let group: Type[][] = [];
		for (var i = 0, j = 0; i < data.length; i++) {
			if (i >= n && i % n === 0) j++;
			group[j] = group[j] || [];
			group[j].push(data[i]);
		}
		return group;
	}

	function processImage(canvas: HTMLCanvasElement): number[][] {
		// Convert on-screen image to something we can feed into our model.
		// The dimensions of the resulting image is the size of the scaled-canvas element given in the html
		const ctx = canvas.getContext('2d');

		// Scale down
		const ctxScaled = document
			.getElementById('scaled-canvas')
			.getContext('2d', { willReadFrequently: true });
		ctxScaled.save();
		ctxScaled.clearRect(0, 0, ctxScaled.canvas.height, ctxScaled.canvas.width);
		ctxScaled.scale(
			ctxScaled.canvas.width / ctx.canvas.width,
			ctxScaled.canvas.height / ctx.canvas.height
		);
		ctxScaled.drawImage(document.getElementById('canvas'), 0, 0);
		const imageData = ctxScaled.getImageData(0, 0, ctxScaled.canvas.width, ctxScaled.canvas.height);
		ctxScaled.restore();

		// Convert to grayscale between 0 and 1
		const grayscale: number[] = [];
		for (let i = 0; i * 4 < imageData.data.length; i++) {
			grayscale[i] = Math.round((1 - imageData.data[i * 4] / 255) * 100) / 100;
		}
		return groupArr(grayscale, ctxScaled.canvas.width);
	}

	let canvas: fabric.Canvas;
	let mouseMoveCount = 0;
	let drawing = false;
	const movesPerPrediction = 50;

	onMount(() => {
		// Canvas setup
		canvas = new fabric.Canvas('canvas');
		canvas.isDrawingMode = true;
		canvas.freeDrawingBrush.width = 15;
		canvas.freeDrawingBrush.color = '#000000';
		canvas.backgroundColor = '#ffffff';
		canvas.renderAll();

		// We can't use the sveltekit on:... annotations in the markup because
		// the canvas is created after the markup is interpreted
		canvas.on('mouse:up', () => {
			drawing = false;
			predict();
		});
		canvas.on('mouse:down', () => {
			drawing = true;
		});
		canvas.on('mouse:move', onMouseMove);
	});

	function onMouseMove() {
		if (drawing && mouseMoveCount++ > movesPerPrediction) {
			canvas.freeDrawingBrush._finalizeAndAddPath();
			(async () => {
				predict();
			})();
			mouseMoveCount = 0;
		}
	}

	function clearCanvas() {
		canvas.clear();
		canvas.backgroundColor = '#ffffff';
		canvas.renderAll();
	}

	function predict() {
		const pixels = processImage(canvas);
		console.log(pixels);
		// XXX : Send to backend
	}
</script>

<div>
	<div class="input-canvas-wrapper">
		<canvas id="canvas" width="140" height="140" />
	</div>
	<button id="clear-canvas" on:click={clearCanvas}>Effacer</button>
	<canvas id="scaled-canvas" style="display:none" width="28" height="28" />
</div>

<style>
	.input-canvas-wrapper {
		width: 140;
		height: 140;
		border: 8px dashed #666;
		border-radius: 8px;
		box-sizing: content-box;
	}
	.input-canvas-wrapper > canvas {
		touch-action: none;
	}
</style>
