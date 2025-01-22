import Certificate1Png from '@/assets/png/certificates/certificate-1.png';
import Certificate2Png from '@/assets/png/certificates/certificate-2.png';
import Certificate3Png from '@/assets/png/certificates/certificate-3.png';
import ApproveSvg from '@/assets/svg/icons/approve.svg';
import GostSvg from '@/assets/svg/icons/gost.svg';
import IsoSvg from '@/assets/svg/icons/iso.svg';
import IsoMobileSvg from '@/assets/svg/icons/iso-mobile.svg';
import {cnIndexScreen} from '@/screens/index-screen/index-screen.const.ts';

export function IndexScreenCertificates() {
    return (
        <section className={cnIndexScreen('certificates')} id={'certificates'}>
            <h2 className={cnIndexScreen('certificates-heading')}>
                Сертификаты и награды
            </h2>
            <div className={cnIndexScreen('certificates-body')}>
                <article className={cnIndexScreen('certificates-info')}>
                    <div className={cnIndexScreen('certificates-images')}>
                        <img src={Certificate1Png} alt={'certificate'} loading={'lazy'}/>
                        <img src={Certificate2Png} alt={'certificate'} loading={'lazy'}/>
                    </div>
                    <div className={cnIndexScreen('certificates-iso')}>
                        <img
                            className={cnIndexScreen('certificates-logo')}
                            src={IsoSvg}
                            alt={'iso'}
                            width={83}
                            height={83}
                        />
                        <img
                            className={cnIndexScreen('certificates-logo', {mobile: true})}
                            src={IsoMobileSvg}
                            alt={'iso'}
                            width={48}
                            height={48}
                        />
                        <div className={cnIndexScreen('certificates-text')}>
                            <h3 className={cnIndexScreen('certificates-title')}>
                                Международная организация по стандартизации
                            </h3>
                            <p className={cnIndexScreen('certificates-description')}>
                                Разрабатывает и публикует международные стандарты,
                                в том числе в области безопасности пищевой продукции.
                            </p>
                        </div>
                    </div>
                </article>
                <article className={cnIndexScreen('certificates-info')}>
                    <img src={Certificate3Png} alt={'certificate'}/>
                </article>
                <article className={cnIndexScreen('certificates-info')}>
                    <div className={cnIndexScreen('certificates-icons')}>
                        <img src={ApproveSvg} alt={'approve'} width={40} height={40}/>
                        <img src={GostSvg} alt={'gost'}/>
                    </div>
                    <h3 className={cnIndexScreen('certificates-title')}>
                        Мы хотим, чтобы вы знали,<br/>что можете доверять нам
                    </h3>
                    <p className={cnIndexScreen('certificates-description')}>
                        Завод Пастухова производит свою продукцию
                        в исключительно безопасных условиях, по ГОСТ.
                    </p>
                </article>
            </div>
        </section>
    );
}
