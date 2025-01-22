import { TabPanels as HLTabPanels } from '@headlessui/react';
import { PropsWithChildren } from 'preact/compat';

export function TabPanel(props: PropsWithChildren) {
	return <HLTabPanels>{props.children}</HLTabPanels>;
}
