<script lang="ts">
	import { page } from '$app/stores';
	import '../../node_modules/@openc-bv/design-system/styles/_base.scss';
	import NavigationBar from '@openc-bv/design-system/components/navigation-bar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { navigationItems } from '$lib/constants';
</script>

<NavigationBar path={$page.url.pathname} items={navigationItems} />

<main class="oc-page-content">
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@import '../../node_modules/@openc-bv/design-system/styles/_base.scss';
</style>
