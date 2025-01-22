import { signal } from '@preact/signals';
import { inject, singleton } from 'tsyringe';

import { IndexScreenModel } from '@/screens/index-screen/index-screen.model.ts';
import { ICategory } from '@/shared/types/category.ts';

@singleton()
export class IndexScreenVm {
	private categories = signal<ICategory[]>([]);

	constructor(@inject(IndexScreenModel) private readonly model: IndexScreenModel) {}

	public init() {
		this.categories.value = this.model.getCategories();
	}

	public getCategories() {
		return this.categories;
	}

	public getCategoryProducts(categoryId: number) {
		return this.model.getCategoryProducts(categoryId);
	}
}
