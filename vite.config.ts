import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		VitePWA({
			includeAssets: ['favicon.png'],
			manifest: {
				name: 'Schedule',
				short_name: 'Schedule',
				description: 'uhhhh teacher when is the class over???',
				theme_color: '#7918E7',
				icons: [
					{
						src: 'favicon.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'favicon.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
});
