/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import classNames from 'classnames';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { GitHub, Twitter, Mail } from '@material-ui/icons';
import styles from './SocialBar.module.css';
import { useSpring, animated, SpringConfig } from 'react-spring';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const SocialButton = ({ Icon, url, scale }: { Icon: React.ElementType; url: string; small?: boolean; scale: any }) => (
    <a href={url}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <animated.div style={{ transform: scale.interpolate((s: any) => `scale(${s})`) }}>
            <IconButton className={classNames(styles.IconButton)}>
                <Icon className={styles.Icon} fontSize="large" />
            </IconButton>
        </animated.div>
    </a>
);

const config: SpringConfig = {
    duration: 200,
};

export default ({ small = false }): JSX.Element => {
    const { scale, offset } = useSpring({
        from: { scale: 1, offset: 1 },
        scale: small ? 0.7 : 1,
        offset: small ? 0 : 1,
        config,
    });
    return (
        <animated.div
            className={classNames(styles.Root)}
            style={{
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                transform: offset.interpolate((o: any) => `translateX(-${o * 24 + 12}px) translateY(${o * 24}px)`),
            }}>
            <SocialButton Icon={Twitter} url="https://twitter.com/MichaelHettmer" {...{ scale }} />
            <SocialButton Icon={GitHub} url="https://github.com/MichaelHettmer" {...{ scale }} />
            <SocialButton Icon={Mail} url="mailto:mail@michael-hettmer.de" {...{ scale }} />
        </animated.div>
    );
};
