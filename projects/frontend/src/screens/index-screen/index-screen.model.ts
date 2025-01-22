import { singleton } from 'tsyringe';

import { ICategory } from '@/shared/types/category.ts';
import { IProduct } from '@/shared/types/product.ts';
import {useData} from "@/hooks/useData";
import {Data} from "@/pages/index/+data.ts";

@singleton()
export class IndexScreenModel {

	public getCategories(): ICategory[] {
		const data = useData<Data>();
		return data.categories;
	}

	public getCategoryProducts(_categoryId: number): IProduct[] {
		const data = useData<Data>();
		return data.products;
	}
}
