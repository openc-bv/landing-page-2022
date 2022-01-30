import defaultConfig from '@openc-bv/design-system/sveltekit/config';
import deepmerge from 'deepmerge';
import adapter from '@sveltejs/adapter-node';

const config = deepmerge(defaultConfig, {
	kit: {
		adapter: adapter(),
		inlineStyleThreshold: 0
	}
});

export default config;
