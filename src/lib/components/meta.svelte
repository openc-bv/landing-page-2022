<script>
	import { page } from '$app/stores';
	import seaImg from '$lib/media/sea-wave.jpg?w=2000&img';

	export let title = 'Page title';
	export let description = 'Page description';
	export let image = seaImg;
	export let path = $page.url.pathname;
	export let domain = 'https://www.openc.nl';
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
