<script lang="ts">
	import { onMount } from 'svelte';
	import { modelStore } from '../../stores';
	import DistributionChart from '$lib/DistributionChart.svelte';

	let tfvis;

	const labels = ['z', '1', 't', '3', 'F', '5', 'six', '7', '8', '9'];
	const values = [0, 0, 0.2, 0.3, 0.5, 0, 0, 0, 0];

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
</script>

<DistributionChart {labels} {values} color="orange" />
