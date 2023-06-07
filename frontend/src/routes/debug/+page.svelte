<script lang="ts">
	import NetworkGraph from '$lib/NetworkGraph.svelte';
	import { twoHiddenLayersModelStore } from '../../stores';
	import type { Link } from '$lib/network-layout';

	$: weights = $twoHiddenLayersModelStore?.weights;

	const activations = 1;

	function linkFilter(links: Link[]) {
		const length = links.length;
		if (length <= 1000) {
			return links;
		}
		const sortedLinks = links.toSorted(
			(a: Link, b: Link) => Math.abs(b.weight) - Math.abs(a.weight)
		);
		return sortedLinks.slice(0, Math.min(1000, 0.2 * length));
	}
</script>

<NetworkGraph {activations} {weights} {linkFilter} />
