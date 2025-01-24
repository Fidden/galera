import DzenSvg from '@/assets/svg/icons/socials/dzen.svg';
import VkSvg from '@/assets/svg/icons/socials/vk.svg';
import TelegramSvg from '@/assets/svg/icons/socials/telegram.svg';
import Youtube from '@/assets/svg/icons/socials/youtube.svg';
import { cnHeader } from '@/components/header/header.const.ts';

export const links = [
	{
		id: 0,
		src: VkSvg,
		alt: 'vkontakte',
		href: 'https://vk.com/clips/id875002440'
	},
	{
		id: 1,
		src: DzenSvg,
		alt: 'dzen',
		href: 'https://dzen.ru/id/668e8658519e875daf096b6e'
	},
	{
		id: 2,
		src: TelegramSvg,
		alt: 'telegram',
		href: 'https://t.me/pastukhov_ochenvkusno'
	},
	{
		id: 3,
		src: Youtube,
		alt: 'telegram',
		href: 'https://www.youtube.com/@zavodpastuhova'
	}
];

export function HeaderContacts() {
	return (
		<ul className={cnHeader('contacts')}>
			{links.map((link) => (
				<li className={cnHeader('contacts-item')}>
					<a href={link.href} target={'_blank'}>
						<img height={26} width={26} src={link.src} alt={link.alt} />
					</a>
				</li>
			))}
		</ul>
	);
}
