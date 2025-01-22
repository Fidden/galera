import 'preact/debug';
import 'reflect-metadata';
import '@/assets/scss/index.scss';
import { createContext } from 'preact';
import { PropsWithChildren, useContext } from 'preact/compat';
import { PageContextClient, PageContextServer } from 'vike/types';

const Context = createContext<PageContextClient | PageContextServer | undefined>(undefined);

interface IPageShellProps extends PropsWithChildren {
	pageContext: PageContextClient | PageContextServer;
}

export function PageShell(props: IPageShellProps) {
	return <Context.Provider value={props.pageContext}>{props.children}</Context.Provider>;
}

export function usePageContext() {
	return useContext(Context);
}
