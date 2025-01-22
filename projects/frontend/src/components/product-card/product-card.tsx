import { cnProductCard } from '@/components/product-card/product-card.const.ts';
import { ProductCardDescription } from '@/components/product-card/product-card__description.tsx';
import { ProductCardName } from '@/components/product-card/product-card__name.tsx';
import { ProductCardPoster } from '@/components/product-card/product-card__poster.tsx';
import { IProduct } from '@/shared/types/product.ts';
import {ProductCardDialog} from "@/components/product-card/product-card__dialog.tsx";
import {useState} from "preact/hooks";

interface IProductCardProps {
	product: IProduct;
}

export function ProductCard(props: IProductCardProps) {
	const [open, setOpen] = useState(false);

	return (
		<article
			onClick={() => setOpen(true)}
			className={cnProductCard()}
		>
			<ProductCardPoster src={props.product.poster} alt={props.product.name} />
			<ProductCardName>{props.product.name}</ProductCardName>
			<ProductCardDescription>{props.product.description}</ProductCardDescription>
			<ProductCardDialog
				open={open}
				onClose={() => setOpen(false)}
				product={props.product}
			/>
		</article>
	);
}
