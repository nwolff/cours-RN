<script lang="ts">
	import { base } from '$app/paths';
	import { Wave } from 'svelte-loading-spinners';
	import { navigating } from '$app/stores';
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/train">Train</a>
	<a href="{base}/draw">Draw</a>
</nav>

{#if $navigating}
	<Wave size="60" color="#FF3E00" unit="px" duration="1s" />
{:else}
	<slot />
{/if}
