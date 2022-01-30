<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	/** @type {import('@sveltejs/kit').Load} */
	export function load({ url }: LoadInput): LoadOutput {
		return {
			props: {
				path: url.pathname
			}
		};
	}
</script>

<script lang="ts">
	import '../../node_modules/@openc-bv/design-system/styles/_base.scss';
	import NavigationBar from '@openc-bv/design-system/components/navigation-bar.svelte';
	import Footer from './_components/footer.svelte';

	export let path: string = undefined;
</script>

<svelte:head>
	<title>OpenC Demo App</title>
</svelte:head>

<NavigationBar {path} />

<main class="oc-page-content">
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@import '../../node_modules/@openc-bv/design-system/styles/_base.scss';
</style>
