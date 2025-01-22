import { TabPanel as HLTabPanel } from '@headlessui/react';
import { PropsWithChildren } from 'preact/compat';

import { cnTab } from '@/components/ui/tab/tab.const.ts';

export function TabContent(props: PropsWithChildren) {
	return <HLTabPanel className={cnTab('content')}>{props.children}</HLTabPanel>;
}
