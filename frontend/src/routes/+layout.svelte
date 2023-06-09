<script lang="ts">
	import { base } from '$app/paths';
	import { Stack, Space, Group, Anchor, AppShell, Header, Title, Navbar } from '@svelteuidev/core';
	import Logo from './_Logo.svelte';
</script>

<AppShell>
	<Navbar slot="navbar" width={{ base: '100%', sm: 110 }}>
		<Stack>
			<Anchor href="{base}/"><Logo size={40} /></Anchor>
			<Anchor href="{base}/predict">Reconnaître</Anchor>
			<Anchor href="{base}/train">Entraîner</Anchor>
			<Anchor href="{base}/evaluate">Evaluer</Anchor>
		</Stack>
	</Navbar>

	<slot />
</AppShell>
