import {Dialog, DialogPanel} from "@headlessui/react";
import {IProduct} from "@/shared/types/product.ts";
import {cnProductCard} from "@/components/product-card/product-card.const.ts";
import {cnIndexScreen} from "@/screens/index-screen/index-screen.const.ts";
import CloseSvg from '@/assets/svg/icons/close.svg';
import {useEffect, useRef} from 'preact/hooks';

interface IProductCardDialogProps {
    product: IProduct;
    onClose: () => void;
    open: boolean;
}

export function ProductCardDialog(props: IProductCardDialogProps) {
    const energy = [
        {text: 'Масса нетто', value: props.product.weight},
        {text: 'Белки', value: props.product.protein},
        {text: 'Жиры', value: props.product.fats},
        {text: 'Углеводы', value: props.product.cal},
    ]

    const panelRef = useRef<HTMLDivElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!panelRef.current || !bodyRef.current) {
            return;
        }
        panelRef.current.style.height = `${bodyRef.current.getBoundingClientRect().height}px`;
    }, [panelRef, bodyRef, props.open]);

    return (
        <Dialog
            className={cnProductCard('dialog')}
            onClose={props.onClose}
            open={props.open}
        >
            <DialogPanel className={cnProductCard('dialog-panel')} ref={panelRef}>
                <button
                    onClick={props.onClose}
                    className={cnProductCard('dialog-close')}
                >
                    <img src={CloseSvg} alt={'close'}/>
                </button>
                <div className={cnProductCard('dialog-body')} ref={bodyRef}>
                    <img
                        className={cnProductCard('dialog-image')}
                        src={props.product.poster}
                        alt={props.product.name}
                    />
                    <p className={cnProductCard('dialog-title')}>
                        {props.product.name}
                    </p>
                    <ul className={cnProductCard('dialog-energy')}>
                        {energy.map(item =>
                            <li className={cnProductCard('dialog-evalue')}>
                                {item.text}: {item.value}г
                            </li>
                        )}
                    </ul>
                    <p className={cnIndexScreen('dialog-description')}>
                        {props.product.description}
                    </p>
                    <div className={cnProductCard('dialog-structure')}>
                        <p className={cnProductCard('dialog-structureTitle')}>
                            Состав
                        </p>
                        <p className={cnProductCard('dialog-structureText')}>
                            {props.product.structure}
                        </p>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    )
}