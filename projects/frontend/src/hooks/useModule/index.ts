import { container } from 'tsyringe';

import { ClassInstanceType } from '@/hooks/useModule/types/class-instance';

export function useModule<T extends ClassInstanceType>(module: T): InstanceType<T> {
	return container.resolve(module);
}
