import Poster1Png from '@/assets/png/brand/poster-1.png';
import Poster2Png from '@/assets/png/brand/poster-2.png';
import Poster3Png from '@/assets/png/brand/poster-3.png';
import ReelsMp4 from '@/assets/video/reels.mp4';
import BrandMobile from '@/assets/svg/brand-mobile.svg';
import {Badge} from '@/components/ui/badge/badge.tsx';
import {cnIndexScreen} from '@/screens/index-screen/index-screen.const.ts';

export function IndexScreenBrand() {
    return (
        <section className={cnIndexScreen('brand')} id={'brand'}>
            <div className={cnIndexScreen('brand-container')}>
                <video
                    className={cnIndexScreen('brand-reels')}
                    src={ReelsMp4}
                    alt={'reels'}
                    muted
                    autoPlay
                    loop
                    preload={'auto'}
                    playsinline
                />

                <div className={cnIndexScreen('brand-body')}>
                    <header className={cnIndexScreen('brand-header')}>
                        <img src={BrandMobile} className={cnIndexScreen('brand-mobile')}/>
                        <h2 className={cnIndexScreen('brand-heading')}>
                            Короткие видео о жизни бренда и много всего интересного!
                        </h2>
                        <div className={cnIndexScreen('brand-info')}>
                            <Badge className={cnIndexScreen('brand-badge')}>
                                @pastukhov_ochenvkusno
                            </Badge>
                            <p className={cnIndexScreen('brand-contacts')}>
                                в&#160;
                                <a href="https://vk.com/clips/id875002440" target={'_blank'}>Vk</a>,&thinsp;
                                <a href="https://t.me/pastukhov_ochenvkusno" target={'_blank'}>Telegram</a>,&thinsp;
                                <a href="https://dzen.ru/id/668e8658519e875daf096b6e" target={'_blank'}>Дзен</a>&thinsp;и&thinsp;
                                <a href="https://www.youtube.com/@zavodpastuhova" target={'_blank'}>YouTube</a>
                            </p>
                        </div>
                    </header>

                    <div className={cnIndexScreen('brand-post', {number: 1})}>
                        <img
                            loading={'lazy'}
                            src={Poster1Png}
                            alt={'reels'}
                            aria-hidden={true}
                        />
                    </div>

                    <div className={cnIndexScreen('brand-post', {number: 2})}>
                        <img
                            loading={'lazy'}
                            src={Poster2Png}
                            alt={'reels'}
                            aria-hidden={true}
                        />
                    </div>

                    <div className={cnIndexScreen('brand-post', {number: 3})}>
                        <img
                            loading={'lazy'}
                            src={Poster3Png}
                            alt={'reels'}
                            aria-hidden={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
