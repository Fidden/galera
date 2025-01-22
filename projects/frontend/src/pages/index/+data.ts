import {PageContextServer} from "vike/types";

export const API_URL = import.meta.env.API_URL;
const CATEGORY_ID = 1;

export async function data(pageContext: PageContextServer) {

    const [productsRes, categoryRes] = await Promise.all([
        fetch(`${API_URL}/products?category_id=${CATEGORY_ID}`),
        fetch(`${API_URL}/categories`),
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