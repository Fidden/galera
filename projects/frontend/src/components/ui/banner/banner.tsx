import {ComponentChild} from 'preact';
import {PropsWithChildren} from 'preact/compat';

import {cnBanner} from '@/components/ui/banner/banner.const.ts';
import {IClassNameProps} from '@/utils/bem/core.ts';

interface IBannerProps extends PropsWithChildren, IClassNameProps {
    badge?: ComponentChild;
    imageMobile?: ComponentChild;
    image: ComponentChild;
}

export function Banner(props: IBannerProps) {
    return (
        <article className={cnBanner.mix(props.className)}>
            <div className={cnBanner('overview')}>
                {props.badge}
                {props.children}
                <div className={cnBanner('image')}>{props.image}</div>
                <div className={cnBanner('image', {mobile: true})}>{props.imageMobile}</div>
            </div>
        </article>
    );
}
