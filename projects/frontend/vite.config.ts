import path from 'path';

import preact from '@preact/preset-vite';
import vike from 'vike/plugin';
import {defineConfig} from 'vite';

// TODO: вынести конфиги в отдельный файл
export default defineConfig({
	plugins: [
		preact({
			babel: {
				plugins: [
					['@babel/plugin-proposal-decorators', {legacy: true}],
					'@babel/plugin-transform-class-properties',
					'babel-plugin-transform-typescript-metadata'
				]
			}
		}),
		vike()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@@': path.resolve(__dirname, './'),
			'react': 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat', // Должно быть ниже test-utils
			'react/jsx-runtime': 'preact/jsx-runtime'
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: '@use "@/assets/scss/variables.scss" as *;'
			}
		}
	},
	optimizeDeps: {
		include: [
			'preact',
			'preact/devtools',
			'preact/debug',
			'preact/jsx-dev-runtime',
			'preact/hooks',
			'preact/compat',
			'gsap',
			'@gsap/react'
		]
	},
	ssr: {
		noExternal: ['gsap', '@gsap/react']
	},
	server: {
		host: true,
		port: 5173
	}
});
