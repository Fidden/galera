import { cnHeader } from '@/components/header/header.const.ts';

export const links = [
	{
		id: 0,
		text: 'Ассортимент',
		href: '#products',
	},
	{
		id: 1,
		text: 'Где купить',
		href: '#purchase',
	},
	{
		id: 2,
		text: 'Наши соц-сети',
		href: '#brand'
	},
	{
		id: 3,
		text: 'Почему мы',
		href: '#about'
	},
	{
		id: 4,
		text: 'Сертификаты',
		href: '#certificates'
	},
	{
		id: 5,
		text: 'Связаться',
		href: '#contacts'
	}
];

export function HeaderNav() {
	return (
		<nav className={cnHeader('nav')}>
			<ul className={cnHeader('links')}>
				{links.map((link) => (
					<li key={link.id} className={cnHeader('links-item')}>
						<a href={link.href}>{link.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
