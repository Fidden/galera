import LogoSvg from '@/assets/svg/logo.svg';
import { cnHeader } from '@/components/header/header.const.ts';

export function HeaderLogo() {
	return (
		<div className={cnHeader('logo')}>
			<img height={40} width={200} src={LogoSvg} alt={'в.п. пастухов'} />
		</div>
	);
}
