import MarketplaceSvg from '@/assets/svg/icons/marketplace/marketplace.svg';
import MegamarketSvg from '@/assets/svg/icons/marketplace/megamarket.svg';
import OzonSvg from '@/assets/svg/icons/marketplace/ozon.svg';
import AuchanSvg from '@/assets/svg/icons/stores/auchan.svg';
import AzbukaVkusaSvg from '@/assets/svg/icons/stores/azbukavkusa.svg';
import FivestoreSvg from '@/assets/svg/icons/stores/fivestore.svg';
import MagnitSvg from '@/assets/svg/icons/stores/magnit.svg';
import OtherSvg from '@/assets/svg/icons/stores/other.svg';
import PerekrestokSvg from '@/assets/svg/icons/stores/perekrestok.svg';
import StoreSvg from '@/assets/svg/icons/stores/store.svg';
import VkusvilSvg from '@/assets/svg/icons/stores/vkusvil.svg';
import { cnIndexScreen } from '@/screens/index-screen/index-screen.const.ts';

export const stores = [
	{
		name: 'auchan',
		poster: AuchanSvg
	},
	{
		name: 'perekrestok',
		poster: PerekrestokSvg
	},
	{
		name: 'fivestore',
		poster: FivestoreSvg
	},
	{
		name: 'vkusvil',
		poster: VkusvilSvg
	},
	{
		name: 'magnit',
		poster: MagnitSvg
	},
	{
		name: 'azbukavkusa',
		poster: AzbukaVkusaSvg
	},
	{
		name: 'other',
		poster: OtherSvg
	}
];

export const marketplaces = [
	{
		name: 'megamarket',
		poster: MegamarketSvg
	},
	{
		name: 'ozon',
		poster: OzonSvg
	}
];

export function IndexScreenPurchase() {
	return (
		<section className={cnIndexScreen('purchase')} id={'purchase'}>
			<h2 className={cnIndexScreen('purchase-heading')}>Где купить?</h2>
			<ul className={cnIndexScreen('purchase-body')}>
				<li className={cnIndexScreen('purchase-option')}>
					<img width={50} height={50} src={StoreSvg} alt={'store'} />
					<h3 className={cnIndexScreen('purchase-title')}>Магазины</h3>
					<p className={cnIndexScreen('purchase-description')}>
						Ищите на прилавках продуктовых магазинов
					</p>
					<ol className={cnIndexScreen('purchase-list')}>
						{stores.map((store) => (
							<li key={store.name}>
								<img src={store.poster} alt={store.name} height={40} />
							</li>
						))}
					</ol>
				</li>

				<li className={cnIndexScreen('purchase-option')}>
					<img width={50} height={50} src={MarketplaceSvg} alt={'marketplace'} />
					<h3 className={cnIndexScreen('purchase-title')}>Маркетплейсы</h3>
					<p className={cnIndexScreen('purchase-description')}>
						Заказывайте онлайн на Ozon и Мегамаркет
					</p>
					<ol className={cnIndexScreen('purchase-list')}>
						{marketplaces.map((store) => (
							<li key={store.name}>
								<img src={store.poster} alt={store.name} />
							</li>
						))}
					</ol>
				</li>
			</ul>
		</section>
	);
}
