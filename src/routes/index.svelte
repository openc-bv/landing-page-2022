<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Hero from "@openc-bv/design-system/components/hero.svelte";
	import image from './_media/sea-wave.jpg';

	const title = "OpenC Insurance Solutions and InsurTech";
	const description = "Create and control innovative insurance solutions and InsurTech.";
	const domain = 'https://www.openc.nl';
	const path = '/';
</script>

<svelte:head>
	<!-- Search engines -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{domain}{path}" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{domain}{path}" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>

<div class="t"></div>

<Hero
	fullHeight
	title="Sea of new possibilities"
	subtitle="Create and control innovative insurance solutions"
	{image}
	buttons={[
		{
			label: 'Contact us',
			href: 'mailto:info@openc.nl?subject=Contact%20request'
		}
	]}
/>

<style lang="scss">
	@import '../../node_modules/@openc-bv/design-system/styles/vars';

	.t {
		display: none;
	}

	:global(.oc-Hero .inner .title),
	:global(.oc-Hero .inner .subtitle) {
		color: $black;
	}
</style>
