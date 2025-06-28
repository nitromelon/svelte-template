import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import cssnano from "cssnano";

export default defineConfig({
	plugins: [sveltekit(), devtoolsJson()],
	css: {
		postcss: {
			plugins: [
				nested({}),
				autoprefixer({}),
				cssnano({
					preset: "advanced",
				}),
			],
		},
	},
});
