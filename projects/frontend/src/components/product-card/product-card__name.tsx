import {PropsWithChildren} from 'preact/compat';

import {cnProductCard} from '@/components/product-card/product-card.const.ts';

export function ProductCardName(props: PropsWithChildren) {
    return (
        <p className={cnProductCard('name')}>
            {props.children}
        </p>
    );
}
