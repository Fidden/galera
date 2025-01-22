import { hydrate, render } from 'preact';
import { PageContextClient } from 'vike/dist/esm/shared/types';

import { PageShell } from '@/renderer/PageShell';

export default async function onRenderClient(pageContext: PageContextClient) {
	const { Page, pageProps } = pageContext;

	const page = (
		<PageShell pageContext={pageContext}>
			<Page {...pageProps} />
		</PageShell>
	);

	const container = document.getElementById('app')!;

	pageContext.isHydration ? hydrate(page, container) : render(page, container);
}
