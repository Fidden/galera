import {ProductCard} from '@/components/product-card/product-card.tsx';
import {TabGroup} from '@/components/ui/tab/tab__group.tsx';
import {TabItem} from '@/components/ui/tab/tab__item.tsx';
import {TabList} from '@/components/ui/tab/tab__list.tsx';
import {cnIndexScreen} from '@/screens/index-screen/index-screen.const.ts';
import {IProduct} from '@/shared/types/product.ts';
import {useData} from "@/hooks/useData";
import {API_URL, Data} from "@/pages/index/+data.ts";
import {useEffect, useState} from "preact/hooks";

export function IndexScreenProducts() {
    const data = useData<Data>();
    const [prevCategoryId, setPrevCategoryId] = useState(data.categoryId);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(data.categoryId);
    const [products, setProducts] = useState<IProduct[]>(data.products);
    const [categories, setCategories] = useState<IProduct[]>(data.categories);

    useEffect(() => {
        if (prevCategoryId === selectedCategoryId) {
            return;
        }

        setPrevCategoryId(selectedCategoryId);

        fetch(`${API_URL}/products?category_id=${selectedCategoryId}`)
            .then(res => res.json())
            .then(json => setProducts(json));
    }, [selectedCategoryId]);


    return (
        <section className={cnIndexScreen('products')} id={'products'}>
            <h2 className={cnIndexScreen('products-heading')}>Наши продукты</h2>
            <TabGroup>
                <TabList>
                    {categories.map((item) => (
                        <TabItem
                            onClick={() => item.id !== selectedCategoryId && setSelectedCategoryId(item.id)}
                            key={item.id}
                        >
                            {item.name}
                        </TabItem>
                    ))}
                </TabList>
            </TabGroup>
            <div className={cnIndexScreen('products-body')}>
                {products.map((product) => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </section>
    );
}
