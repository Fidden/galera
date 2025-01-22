import { Fragment, PropsWithChildren } from 'preact/compat';

import { Footer } from '@/components/footer/footer.tsx';
import { Header } from '@/components/header/header.tsx';
import { cnLayoutPage } from '@/layouts/page/layout-page.const.ts';
import { IClassNameProps } from '@/utils/bem/core.ts';

interface ILayoutPageProps extends PropsWithChildren, IClassNameProps {}

export function LayoutPage(props: ILayoutPageProps) {
	return (
		<Fragment>
			<Header />
			<main className={cnLayoutPage.mix(props.className)}>{props.children}</main>
			<Footer />
		</Fragment>
	);
}
