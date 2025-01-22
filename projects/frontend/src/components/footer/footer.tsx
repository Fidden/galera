import { cnFooter } from '@/components/footer/footer.const.ts';
import { FooterCopyRights } from '@/components/footer/footer__copyrights.tsx';
import { FooterDocuments } from '@/components/footer/footer__documents.tsx';

export function Footer() {
	return (
		<div className={cnFooter('wrapper')}>
			<footer className={cnFooter()}>
				<FooterCopyRights />
				<FooterDocuments />
			</footer>
		</div>
	);
}
