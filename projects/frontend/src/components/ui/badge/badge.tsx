import { PropsWithChildren } from 'preact/compat';

import { cnBadge } from '@/components/ui/badge/badge.const.ts';
import { IClassNameProps } from '@/utils/bem/core.ts';

interface IBadgeProps extends PropsWithChildren, IClassNameProps {}

export function Badge(props: IBadgeProps) {
	return <div className={cnBadge.mix(props.className)}>{props.children}</div>;
}
