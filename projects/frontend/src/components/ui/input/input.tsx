import type { InputHTMLAttributes } from 'preact/compat';

import { cnInput } from '@/components/ui/input/input.const.ts';
import { IClassNameProps } from '@/utils/bem/core.ts';

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>, IClassNameProps {

}

export function Input(props: IInputProps) {
	return (
		<input
			className={cnInput.mix(props.className)}
			{...props}
		/>
	);
}
