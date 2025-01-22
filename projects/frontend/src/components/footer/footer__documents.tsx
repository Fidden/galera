import { cnFooter } from '@/components/footer/footer.const.ts';

export const links = [
	{
		id: 0,
		text: 'Юридические документы',
		href: '#'
	},
	{
		id: 1,
		text: 'Политика в отношении обработки персональных данных',
		href: '#'
	}
];

export function FooterDocuments() {
	return (
		<ul className={cnFooter('documents')}>
			{links.map((link) => (
				<li key={link.id}>
					<a href={link.href}>{link.text}</a>
				</li>
			))}
		</ul>
	);
}
