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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={cnHeader('burger-line1', {open})} d="M22.5 10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z" fill="black"/>
                    <path className={cnHeader('burger-line2', {open})} d="M1.5 6.50002H22.5C23.3284 6.50002 24 5.82844 24 5.00002C24 4.17159 23.3284 3.50002 22.5 3.50002H1.5C0.671578 3.50002 0 4.17159 0 5.00002C0 5.82844 0.671578 6.50002 1.5 6.50002Z" fill="black"/>
                    <path className={cnHeader('burger-line3', {open})} d="M22.5 17.5H1.5C0.671578 17.5 0 18.1716 0 19C0 19.8284 0.671578 20.5 1.5 20.5H22.5C23.3284 20.5 24 19.8284 24 19C24 18.1716 23.3284 17.5 22.5 17.5Z" fill="black"/>
                </svg>
            </button>
            <div className={cnHeader('burger-body', {open})}>
                {props.children}
            </div>
        </div>
    )
}