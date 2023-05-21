<script lang="ts">
	import NetworkGraph from '$lib/NetworkGraph.svelte';
	import { twoHiddenLayersModelStore } from '../../stores';
	import type { Link } from '$lib/network-layout';

	$: weights = $twoHiddenLayersModelStore?.weights;

	const activations = 1;

	function linkFilter(link: Link) {
		return link.a.activation > 0.15 || Math.abs(link.weight) > 0.5;
	}
</script>

<NetworkGraph {activations} {weights} {linkFilter} />
