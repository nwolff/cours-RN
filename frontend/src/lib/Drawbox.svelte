<script lang="ts">
	import { fabric } from 'fabric';
	import { onMount, createEventDispatcher } from 'svelte';
	import { Button, Group } from '@svelteuidev/core';

	const dispatch = createEventDispatcher();

	function processImage(canvas: fabric.Canvas): ImageData {
		// Convert on-screen image to something we can feed into our model.
		// The dimensions of the resulting image is the size of the scaled-canvas element given in the html
		const ctx = canvas.getContext();

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

		return imageData;
	}

	let canvas: fabric.Canvas;
	let mouseMoveCount = 0;
	let drawing = false;
	const movesPerPrediction = 20;

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
			predict();
			mouseMoveCount = 0;
		}
	}

	function clearCanvas() {
		canvas.clear();
		canvas.backgroundColor = '#ffffff';
		canvas.renderAll();
		predict();
	}

	function computeBoundingRect(canvas: fabric.Canvas) {
		let minX = Number.MAX_VALUE;
		let minY = Number.MAX_VALUE;
		let maxX = -Number.MAX_VALUE;
		let maxY = -Number.MAX_VALUE;
		for (const obj of canvas.getObjects()) {
			minX = Math.min(minX, obj.left);
			minY = Math.min(minY, obj.top);
			maxX = Math.max(maxX, obj.left + obj.width);
			maxY = Math.max(maxY, obj.top + obj.height);
		}
		// Now some clamping because fabric lets the user draw outside
		minX = Math.max(0, minX);
		minY = Math.max(0, minY);
		maxX = Math.min(maxX, canvas.width);
		maxY = Math.min(maxY, canvas.height);

		return {
			x: minX,
			y: minY,
			width: maxX - minX,
			height: maxY - minY
		};
	}

	function predict() {
		console.log('predict');
		console.log(computeBoundingRect(canvas));
		const image = processImage(canvas);
		dispatch('imageData', { image: image });
	}
</script>

<div class="numbers with-normalizer">
	<Group>
		<div class="input-canvas-wrapper">
			<canvas class="drawcanvas" id="canvas" width="140" height="140" />
		</div>
		<canvas id="scaled-canvas" style="display:none" width="28" height="28" />
		<p>
			<Button id="clear-canvas" on:click={clearCanvas}>Effacer</Button>
		</p>
	</Group>
</div>

<style>
	.numbers .input-canvas-wrapper {
		width: 140px;
		height: 140px;
		border: 8px dashed #666;
		border-radius: 8px;
		box-sizing: content-box;
	}
</style>
