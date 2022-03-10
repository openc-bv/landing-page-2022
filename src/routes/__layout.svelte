<script lang="ts">
	import '@openc-bv/design-system/styles/base.scss';
	import '$lib/global.scss';
	import { page } from '$app/stores';
	import NavigationBar from '@openc-bv/design-system/components/navigation-bar.svelte';
	import Footer from '@openc-bv/design-system/components/footer.svelte';
	import { navigationItems } from '$lib/constants';
import IconLinkedin from '$lib/gfx/icon-linkedin.svelte';
</script>

<NavigationBar path={$page.url.pathname} items={navigationItems} />

<main class="oc-page-content">
	<slot />
</main>

<Footer>
	<div slot="social">
		<a href="https://www.linkedin.com/company/openc-net/" target="_blank">
			<IconLinkedin />
			<span class="sr">LinkedIn</span>
		</a>
	</div>
</Footer>
