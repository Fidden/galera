import {usePageContext} from "@/renderer/PageShell";

export function useData<T>() {
	const {data} = usePageContext();
	return data as T;
}