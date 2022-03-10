<script lang="ts">
	import '@openc-bv/design-system/styles/base.scss';
	import '$lib/global.scss';
	import { page } from '$app/stores';
	import NavigationBar from '@openc-bv/design-system/components/navigation-bar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { navigationItems } from '$lib/constants';
</script>

<NavigationBar path={$page.url.pathname} items={navigationItems} />

<main class="oc-page-content">
	<slot />
</main>

<Footer />
