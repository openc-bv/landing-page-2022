import defaultConfig from '@openc-bv/design-system/sveltekit/config';
import deepmerge from 'deepmerge';
import adapter from '@sveltejs/adapter-static';

const config = deepmerge(defaultConfig, {
	kit: {
		adapter: adapter(),
		inlineStyleThreshold: 0,
		browser: {
			hydrate: false,
			router: false
		}
	}
});

export default config;
