import type { Config } from 'vike/types';

export default {
	passToClient: ['pageProps', 'documentProps'],
	clientRouting: true,
	prefetchStaticAssets: 'hover'
} satisfies Config;
