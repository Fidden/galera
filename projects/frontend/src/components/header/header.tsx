import { cnHeader } from '@/components/header/header.const.ts';
import { HeaderContacts } from '@/components/header/header__contacts.tsx';
import { HeaderLogo } from '@/components/header/header__logo.tsx';
import { HeaderNav } from '@/components/header/header__nav.tsx';
import {HeaderBurger} from "@/components/header/header__burder.tsx";

export function Header() {
	return (
		<header className={cnHeader()}>
			<HeaderLogo />
			<HeaderBurger>
				<HeaderNav />
				<HeaderContacts />
			</HeaderBurger>
		</header>
	);
}
