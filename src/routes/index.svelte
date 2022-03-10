<script lang="ts">
	import Hero from '@openc-bv/design-system/components/hero.svelte';
	import Meta from '$lib/components/meta.svelte';
	import image from '$lib/media/sea-wave.jpg';
</script>

<Meta
	title="OpenC Insurance Solutions and InsurTech"
	description="Create and control innovative insurance solutions and InsurTech."
/>

<div class="home">
	<Hero
		fullHeight
		title="Sea of new possibilities"
		subtitle="Create and control innovative insurance solutions"
		{image}
		backgroundElement="redgold"
		buttons={[
			{
				label: 'Contact us',
				href: 'mailto:info@openc.nl?subject=Contact%20request'
			}
		]}
	/>
</div>

<style lang="scss">
	@import '@openc-bv/design-system/styles/vars';

	.home {
		:global(.oc-Hero .inner .title),
		:global(.oc-Hero .inner .subtitle) {
			color: $black;
		}
	}
</style>
