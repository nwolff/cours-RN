<script lang="ts">
	import { onMount } from 'svelte';
	import { modelStore } from '../../stores';

	let tfvis;

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
