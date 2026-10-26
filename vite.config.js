import { defineConfig } from 'vite';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';

export default defineConfig({
	base: process.env.BASE_PATH || '/',
	plugins: [
		svgSpritemap({
			pattern: 'src/resources/img/svg/*.svg',
			filename: 'assets/sprite.svg',
		}),
	],
});
