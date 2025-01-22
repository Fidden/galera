import { TabGroup as HLTabGroup } from '@headlessui/react';
import { PropsWithChildren } from 'preact/compat';

import { cnTab } from '@/components/ui/tab/tab.const.ts';

export function TabGroup(props: PropsWithChildren) {
	return <HLTabGroup className={cnTab('group')}>{props.children}</HLTabGroup>;
}
