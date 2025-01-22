import { TabList as HLTabList } from '@headlessui/react';
import { PropsWithChildren } from 'preact/compat';

import { cnTab } from '@/components/ui/tab/tab.const.ts';

export function TabList(props: PropsWithChildren) {
	return <HLTabList className={cnTab('list')}>{props.children}</HLTabList>;
}
