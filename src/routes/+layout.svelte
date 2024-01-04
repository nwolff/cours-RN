<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { Stack, Anchor, AppShell, Navbar } from '@svelteuidev/core';
	import Logo from './_Logo.svelte';
</script>

<AppShell>
	<Navbar slot="navbar" width={{ base: '100%', sm: 110 }}>
		<Stack>
			<Anchor href="{base}/"><Logo size={40} /></Anchor>
			<Anchor href="{base}/predict" underline={$page.url.pathname.endsWith('/predict')}>
				Reconnaître
			</Anchor>
			<Anchor href="{base}/train" underline={$page.url.pathname.endsWith('/train')}>
				Entraîner
			</Anchor>
			<Anchor href="{base}/evaluate" underline={$page.url.pathname.endsWith('/evaluate')}>
				Evaluer
			</Anchor>
		</Stack>
	</Navbar>

	<slot />
</AppShell>
