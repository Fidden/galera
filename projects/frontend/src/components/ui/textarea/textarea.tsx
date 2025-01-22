import type { TextareaHTMLAttributes } from 'preact/compat';

import { cnTextArea } from '@/components/ui/textarea/textarea.const.ts';
import { IClassNameProps } from '@/utils/bem/core.ts';

interface ITextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>, IClassNameProps {

}

export function Textarea(props: ITextareaProps) {
	return (
		<textarea
			className={cnTextArea.mix(props.className)}
			{...props}
		/>
	);
}
