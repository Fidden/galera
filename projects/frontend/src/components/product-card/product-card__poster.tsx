import {cnProductCard} from '@/components/product-card/product-card.const.ts';

interface IProductCardPoster {
    src: string;
    alt: string;
}

export function ProductCardPoster(props: IProductCardPoster) {
    return <img
        className={cnProductCard('poster')}
        src={props.src.replace('http://nginx/storage/', '/storage/')}
        alt={props.alt}
        loading={'lazy'}
    />;
}
