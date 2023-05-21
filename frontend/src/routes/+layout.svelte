<script lang="ts">
	import { base } from '$app/paths';
	import { Stack, Space, Group, Anchor, AppShell, Header, Title, Navbar } from '@svelteuidev/core';
	import Logo from './_Logo.svelte';
</script>

<AppShell>
	<Navbar slot="navbar" width={{ base: '100%', sm: 100 }}>
		<Stack>
			<Space />
			<Anchor href="{base}/">Accueil</Anchor>
			<Anchor href="{base}/train">Entraîner</Anchor>
			<Anchor href="{base}/predict">Prédire</Anchor>
		</Stack>
	</Navbar>

	<Header slot="header" height={50}>
		<Group>
			<Logo size={40} />
			<Title order={1}>IA - Réseaux de neurones</Title>
		</Group>
	</Header>

	<slot />
</AppShell>
