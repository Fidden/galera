import {cnProductCard} from '@/components/product-card/product-card.const.ts';

interface IProductCardPoster {
    src: string;
    alt: string;
}

export function ProductCardPoster(props: IProductCardPoster) {
    return <img
        className={cnProductCard('poster')}
        src={props.src}
        alt={props.alt}
        loading={'lazy'}
    />;
}
