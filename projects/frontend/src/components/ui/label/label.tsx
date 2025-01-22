import type { LabelHTMLAttributes, PropsWithChildren } from 'preact/compat';

import { cnLabel } from '@/components/ui/label/label.const.ts';

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement>, PropsWithChildren {
	text: string;
	required?: boolean;
}

export function Label(props: ILabelProps) {
	return (
		<label
			className={cnLabel()}
			{...props}
		>
			<span>
				{props.text}
				{props.required && <span className={cnLabel('required')}>*</span>}
			</span>
			{props.children}
		</label>
	);
}
