<script lang="ts">
	import { onMount } from 'svelte';
	import { modelStore } from '../../stores';
	import DistributionChart from '$lib/DistributionChart.svelte';
	import DrawBox from '$lib/DrawBox.svelte';

	let tfvis;

	const labels = ['z', '1', 't', 'F', '5', 'six'];
	const values = [0, 0.1, 0.2, 0.3, 0.5, 0.6];

	onMount(async () => {
		tfvis = await import('@tensorflow/tfjs-vis');
		showModelSummary();
	});

	async function showModelSummary() {
		const summaryContainer = { name: 'Résumé du modèle', tab: 'Inspection' };
		tfvis.show.modelSummary(summaryContainer, $modelStore);
		for (const [index, layer] of $modelStore.layers.entries()) {
			const layerContainer = { name: 'Couche ' + index, tab: 'Inspection' };
			tfvis.show.layer(layerContainer, layer);
		}
	}

	function handleDrawnImage(event: { detail: { image: CanvasRenderingContext2D } }) {
		console.log('handleDrawnImage', event.detail.image);
	}
</script>

<DrawBox on:imageData={handleDrawnImage} />
<DistributionChart {labels} {values} color="orange" />
