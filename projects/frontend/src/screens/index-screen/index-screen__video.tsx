import PresentationMP4 from '@/assets/video/presentation.mp4';
import { cnIndexScreen } from '@/screens/index-screen/index-screen.const.ts';

export function IndexScreenVideo() {
	return (
		<section className={cnIndexScreen('video')}>
			<video
				className={cnIndexScreen('video-player')}
				muted
				autoPlay
				loop
				preload={'auto'}
				playsinline
			>
				<source src={PresentationMP4} type={'video/mp4'} />
			</video>
		</section>
	);
}
