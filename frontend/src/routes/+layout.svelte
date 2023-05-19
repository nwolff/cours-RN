<script lang="ts">
	import { base } from '$app/paths';
	import { Stack, Anchor, AppShell, Navbar, Container } from '@svelteuidev/core';
</script>

<AppShell>
	<Navbar slot="navbar" width={{ base: '100%', sm: 100 }}>
		<Stack>
			<Anchor href="{base}/">Accueil</Anchor>
			<Anchor href="{base}/train">Entrainer</Anchor>
			<Anchor href="{base}/predict">Prédire</Anchor>
		</Stack>
	</Navbar>

	<slot />
</AppShell>
