import { PropsWithChildren } from 'preact/compat';

import { cnProductCard } from '@/components/product-card/product-card.const.ts';

export function ProductCardDescription(props: PropsWithChildren) {
	return <p className={cnProductCard('description')}>{props.children}</p>;
}
