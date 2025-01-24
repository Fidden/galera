import { renderToString } from 'preact-render-to-string';
import { PageContextServer } from 'vike/dist/esm/shared/types';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import AppleTouchIcon from '@/static/favicon/apple-touch-icon.png';
import Favicon32 from '@/static/favicon/favicon-32x32.png';
import Favicon16 from '@/static/favicon/favicon-16x16.png';
import { PageShell } from '@/renderer/PageShell';



export default function onRenderHtml(pageContext: PageContextServer) {
	const { Page, pageProps } = pageContext;
	const pageHtml = renderToString(
		<PageShell pageContext={pageContext}>
			<Page {...pageProps} />
		</PageShell>
	);

	const documentHtml = escapeInject`<!DOCTYPE html>
		<html lang="ru">
		  <head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="color-scheme" content="light dark" />
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap" rel="stylesheet">
			<title>Завод В.П.Пастухова</title>
			<meta property="og:title" content="Завод В.П.Пастухова">
			<meta property="og:description" content="Завод геронтодиетологического, детского и органического питания имени В.П.Пастухова - молочное суфле, молочный зефир, десерт картошка, сливочное масло, сгущенное молоко ">
			<meta name="description" content="Завод геронтодиетологического, детского и органического питания имени В.П.Пастухова">
			<meta name="keywords" content="завод пастухова, суфле пастухова, картошка пастухова, масло, сгущенка, зефир">
			<meta property="og:url" content="https://pastukhov-ochenvkusno.ru">
			<link rel="canonical" href="https://pastukhov-ochenvkusno.ru">
			<link rel="apple-touch-icon" sizes="180x180" href="${AppleTouchIcon}">
			<link rel="icon" type="image/png" sizes="32x32" href="${Favicon32}">
			<link rel="icon" type="image/png" sizes="16x16" href="${Favicon16}">
		  </head>
		  <body>
		  	<div id="app">
		  		${dangerouslySkipEscape(pageHtml)}
			</div>
		  </body>
		</html>`;

	return {
		documentHtml,
		pageContext: {
			// We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
		}
	};
}
