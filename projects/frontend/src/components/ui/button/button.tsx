import type {PropsWithChildren} from 'preact/compat';
import {ButtonHTMLAttributes} from "preact/compat";

import {cnButton} from '@/components/ui/button/button.const.ts';
import {IClassNameProps} from '@/utils/bem/core.ts';

interface IButtonProps extends PropsWithChildren, IClassNameProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {

}

export function Button(props: IButtonProps) {
    return (
        <button
            className={cnButton()}
            {...props}
        >
            {props.children}
        </button>
    );
}
