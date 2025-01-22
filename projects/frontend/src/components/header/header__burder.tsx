import {cnHeader} from "@/components/header/header.const.ts";
import {PropsWithChildren} from "preact/compat";
import BurgerSvg from '@/assets/svg/icons/burder.svg';
import {useState} from "preact/hooks";

export function HeaderBurger(props: PropsWithChildren) {
    const [open, setOpen] = useState(false);

    return (
        <div className={cnHeader('burger')}>
            <button
                onClick={() => setOpen(!open)}
                className={cnHeader('burger-button')}
            >
                <img src={BurgerSvg} alt={'burger'}/>
            </button>
            <div className={cnHeader('burger-body', {open})}>
                {props.children}
            </div>
        </div>
    )
}