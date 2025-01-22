import { useModule } from '@/hooks/useModule';
import { LayoutPage } from '@/layouts/page/layout-page.tsx';
import { cnIndexScreen } from '@/screens/index-screen/index-screen.const.ts';
import { IndexScreenVm } from '@/screens/index-screen/index-screen.vm.ts';
import { IndexScreenAbout } from '@/screens/index-screen/index-screen__about.tsx';
import { IndexScreenBrand } from '@/screens/index-screen/index-screen__brand.tsx';
import { IndexScreenContacts } from '@/screens/index-screen/index-screen__contacts.tsx';
import { IndexScreenInnovation } from '@/screens/index-screen/index-screen__innovation.tsx';
import { IndexScreenProducts } from '@/screens/index-screen/index-screen__products.tsx';
import { IndexScreenPurchase } from '@/screens/index-screen/index-screen__purchase.tsx';
import { IndexScreenVideo } from '@/screens/index-screen/index-screen__video.tsx';
import { IndexScreenCertificates } from '@/screens/index-screen/index-screen__certificates.tsx';


export function IndexScreen() {
	return (
		<LayoutPage className={cnIndexScreen()}>
			<IndexScreenVideo />
			<IndexScreenInnovation />
			<IndexScreenProducts />
			<IndexScreenPurchase />
			<IndexScreenBrand />
			<IndexScreenAbout />
			<IndexScreenCertificates />
			<IndexScreenContacts />
		</LayoutPage>
	);
}
