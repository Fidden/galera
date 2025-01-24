import {LayoutPage} from '@/layouts/page/layout-page.tsx';
import {cnIndexScreen} from '@/screens/index-screen/index-screen.const.ts';
import {IndexScreenAbout} from '@/screens/index-screen/index-screen__about.tsx';
import {IndexScreenBrand} from '@/screens/index-screen/index-screen__brand.tsx';
import {IndexScreenContacts} from '@/screens/index-screen/index-screen__contacts.tsx';
import {IndexScreenInnovation} from '@/screens/index-screen/index-screen__innovation.tsx';
import {IndexScreenProducts} from '@/screens/index-screen/index-screen__products.tsx';
import {IndexScreenPurchase} from '@/screens/index-screen/index-screen__purchase.tsx';
import {IndexScreenVideo} from '@/screens/index-screen/index-screen__video.tsx';
import {IndexScreenCertificates} from '@/screens/index-screen/index-screen__certificates.tsx';
import {useEffect} from 'preact/hooks';

export function IndexScreen() {

    const disableDrag = (event: DragEvent) => {
        event.preventDefault();
    }

    useEffect(() => {
        document.addEventListener('dragstart', disableDrag);
        return () => document.removeEventListener('dragstart', disableDrag)
    }, []);

    return (
        <LayoutPage className={cnIndexScreen()}>
            <IndexScreenVideo/>
            <IndexScreenInnovation/>
            <IndexScreenProducts/>
            <IndexScreenPurchase/>
            <IndexScreenBrand/>
            <IndexScreenAbout/>
            <IndexScreenCertificates/>
            <IndexScreenContacts/>
        </LayoutPage>
    );
}
