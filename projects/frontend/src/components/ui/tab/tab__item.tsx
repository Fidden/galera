import { Tab as HLTab, TabProps } from '@headlessui/react';

import { cnTab } from '@/components/ui/tab/tab.const.ts';
import { IClassNameProps } from '@/utils/bem/core.ts';

interface ITabItemProps extends IClassNameProps, Omit<TabProps<'button'>, 'className'> {}

export function TabItem(props: ITabItemProps) {
	return (
		<HLTab className={cnTab('item').mix(props.className)} {...props}>
			{props.children}
		</HLTab>
	);
}
