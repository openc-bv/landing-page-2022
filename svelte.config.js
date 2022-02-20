import defaultConfig from '@openc-bv/design-system/sveltekit/config';
import deepmerge from 'deepmerge';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = deepmerge(defaultConfig, {
	kit: {
		adapter: adapter(),
		inlineStyleThreshold: 0,
		paths: {
			assets: 'https://landing-jan-2022.static.openc.nl'
		}
	}
});

export default config;
