import CheeseCakePng from '@/assets/png/cheesecacke.png';
import CheeseCakeMobilePng from '@/assets/png/cheesecake-mobile.png';
import StarSvg from '@/assets/svg/icons/star.svg';
import { Badge } from '@/components/ui/badge/badge.tsx';
import { Banner } from '@/components/ui/banner/banner.tsx';
import { cnIndexScreen } from '@/screens/index-screen/index-screen.const.ts';

export function IndexScreenInnovation() {
	return (
		<section className={cnIndexScreen('innovation')}>
			<Banner
				className={cnIndexScreen('innovation-banner')}
				image={<img src={CheeseCakePng} alt={'чиз-кейк'} />}
				imageMobile={<img src={CheeseCakeMobilePng} alt={'чиз-кейк'} />}
				badge={
					<Badge>
						<img
							src={StarSvg}
							alt={'star'}
							width={20}
							height={20}
							aria-hidden={true}
							loading={'lazy'}
						/>
						Новинка
					</Badge>
				}
			>
				<p className={cnIndexScreen('innovation-text')}>
					Попробуйте <br />
					<span>Чизкейк</span>
				</p>
				<Badge>Уже на прилавках</Badge>
			</Banner>
		</section>
	);
}
