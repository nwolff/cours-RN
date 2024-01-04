<script lang="ts">
	// Paint code from https://www.i-am.ai/neural-numbers.html
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { Button, Group } from '@svelteuidev/core';

	const dispatch = createEventDispatcher();

	let SCALE_FACTOR = 9;
	let LINEWIDTH = 2 * SCALE_FACTOR;

	let drawcanvas: HTMLCanvasElement;
	let normalizecanvas: HTMLCanvasElement;
	let drawcontext: CanvasRenderingContext2D;
	let normalizecontext: CanvasRenderingContext2D;

	let pos = { x: 0, y: 0 };
	let isdown = false;
	let pointerId = -1;

	const eventfunctions: { [id: string]: any } = {
		pointerdown: (e: { clientX: number; clientY: number; pointerId: number }) => {
			if (!isdown) {
				setPosition(e);
				isdown = true;
				pointerId = e.pointerId;
			}
		},
		pointermove: (e: { clientX: number; clientY: number; pointerId: number }) => {
			if (isdown && pointerId === e.pointerId) {
				draw(e);
			}
		},
		pointerup: (e: { pointerId: number }) => {
			if (pointerId === e.pointerId) {
				isdown = false;
				imageReady();
			}
		},
		pointerleave: (e: { pointerId: number }) => {
			if (pointerId === e.pointerId) {
				isdown = false;
			}
		},
		pointercancel: (e: { pointerId: number }) => {
			if (pointerId === e.pointerId) {
				isdown = false;
			}
		}
	};

	onMount(() => {
		addEventListeners();

		normalizecanvas.width = 28;
		normalizecanvas.height = 28;

		const updateDimensions = () => {
			SCALE_FACTOR = Math.floor(drawcanvas.clientWidth / 28) - 1;
			LINEWIDTH = 2 * SCALE_FACTOR;
			drawcanvas.width = drawcanvas.clientWidth;
			drawcanvas.height = drawcanvas.clientWidth;
		};
		updateDimensions();
		window.onresize = () => {
			updateDimensions();
		};

		drawcontext = drawcanvas.getContext('2d', { willReadFrequently: true })!;
		normalizecontext = normalizecanvas.getContext('2d', { willReadFrequently: true })!;
		clear();
	});

	onDestroy(() => {
		clear();
		removeEventListeners();
	});

	function clear() {
		drawcontext.fillRect(0, 0, drawcanvas.width, drawcanvas.height);
		normalize(100);
		imageReady();
	}

	function addEventListeners() {
		for (const eventname in eventfunctions) {
			drawcanvas.addEventListener(eventname, eventfunctions[eventname], {
				passive: true
			});
		}
	}

	function removeEventListeners() {
		for (const eventname in eventfunctions) {
			drawcanvas.removeEventListener(eventname, eventfunctions[eventname]);
		}
	}

	function setPosition(e: { clientX: number; clientY: number }) {
		const rect = drawcanvas.getBoundingClientRect();
		pos.x = e.clientX - rect.left;
		pos.y = e.clientY - rect.top;
	}

	function draw(e: { clientX: number; clientY: number }) {
		const ox = pos.x;
		const oy = pos.y;
		setPosition(e);
		const nx = pos.x;
		const ny = pos.y;
		if (Math.abs(nx - ox) + Math.abs(ny - oy) < 3) {
			pos.x = ox;
			pos.y = oy;
			return;
		}
		drawcontext.beginPath(); // begin
		drawcontext.lineWidth = LINEWIDTH;
		drawcontext.lineCap = 'round';
		drawcontext.strokeStyle = 'white';

		drawcontext.moveTo(ox, oy); // from
		setPosition(e);
		drawcontext.lineTo(nx, ny); // to

		drawcontext.stroke(); // draw it!

		normalizecontext.fillStyle = 'black';
		normalizecontext.fillRect(0, 0, normalizecanvas.width, normalizecanvas.height);

		normalize(LINEWIDTH);
	}

	// normalize image
	function normalize(SKIPFACTOR: number) {
		let centerx = 0;
		let centery = 0;
		let top = 1000;
		let bottom = -1000;
		let left = 1000;
		let right = -1000;
		const imgData = drawcontext.getImageData(0, 0, drawcanvas.width, drawcanvas.height);
		const { data } = imgData;
		let totalweight = 0;
		for (let i = 0; i < data.length; i += 4 * SKIPFACTOR) {
			const x = (i / 4) % drawcanvas.width;
			const y = (i / 4 / drawcanvas.width) | 0;
			totalweight += data[i];
			centerx += data[i] * x;
			centery += data[i] * y;

			if (data[i] > 0) {
				top = Math.min(top, y);
				bottom = Math.max(bottom, y);
				left = Math.min(left, x);
				right = Math.max(right, x);
			}
		}
		if (totalweight > 0) {
			centerx /= totalweight;
			centery /= totalweight;

			const boxsize = Math.max(right - left, bottom - top);

			/*
			According to MNIST normalization:

      		The original black and white (bilevel) images from NIST were size normalized
      		to fit in a 20x20 pixel box while preserving their aspect ratio. The
      		resulting images contain grey levels as a result of the anti-aliasing
      		technique used by the normalization algorithm. the images were centered
      		in a 28x28 image by computing the center of mass of the pixels, and
      		translating the image so as to position this point at the center of the 28x28 field.
      		*/
			normalizecontext.drawImage(
				drawcanvas,
				left,
				top,
				boxsize,
				boxsize,
				14 + (20 / boxsize) * (left - centerx),
				14 + (20 / boxsize) * (top - centery),
				20,
				20
			);
		} else {
			normalizecontext.fillRect(0, 0, normalizecanvas.width, normalizecanvas.height);
		}
	}

	function imageReady() {
		dispatch('imageData', { image: normalizecanvas });
	}
</script>

<Group>
	<div class="numbers">
		<div class="drawcanvas-wrapper">
			<canvas bind:this={drawcanvas} class="drawcanvas" id="canvas" width="140" height="140" />
		</div>
		<div class="normalizecanvas-wrapper">
			<canvas bind:this={normalizecanvas} class="normalizecanvas" width="28" height="28" />
		</div>
	</div>
</Group>
<Group>
	<Button id="clear-canvas" on:click={clear}>Effacer</Button>
</Group>

<style>
	.numbers {
		display: flex;
		margin-bottom: 20px;
	}
	.numbers .drawcanvas-wrapper {
		flex: 2;
		width: 140px;
		height: 140px;
		border: 8px dashed #666;
		border-radius: 8px;
		box-sizing: content-box;
	}

	.numbers .drawcanvas {
		pointer-events: all !important;
		filter: invert(1);
		opacity: 0.8;
	}

	.numbers .normalizecanvas-wrapper {
		display: none;
	}
</style>
