import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.env.NODE_ENV === 'development';
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/Inno_Frontend_2022',
		  },
		},
};

export default config;
