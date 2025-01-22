import {PageContextServer} from "vike/types";

const CATEGORY_ID = 1;

export async function data(pageContext: PageContextServer) {

    const [productsRes, categoryRes] = await Promise.all([
        fetch(`http://nginx/api/products?category_id=${CATEGORY_ID}`),
        fetch(`http://nginx/api/categories`),
    ])

    const [products, categories] = await Promise.all([
        productsRes.json(),
        categoryRes.json()
    ])

    return {
        products,
        categories,
        categoryId: CATEGORY_ID
    }
}

export type Data = Awaited<ReturnType<typeof data>>;