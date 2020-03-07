import classNames from 'classnames';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { GitHub, Twitter, Mail } from '@material-ui/icons';
import styles from './SocialBar.module.css';

const SocialButton = ({ Icon, url, small }: { Icon: React.ElementType; url: string; small: boolean }) => (
    <a href={url}>
        <IconButton className={classNames(styles.IconButton, { [styles.IconButtonSmall]: small })}>
            <Icon className={styles.Icon} fontSize="large" />
        </IconButton>
    </a>
);

export default ({ small = false }) => (
    <div className={classNames(styles.Root, { [styles.RootSmall]: small })}>
        <SocialButton Icon={Twitter} url="https://twitter.com/MichaelHettmer" {...{ small }} />
        <SocialButton Icon={GitHub} url="https://github.com/MichaelHettmer" {...{ small }} />
        <SocialButton Icon={Mail} url="mailto:mail@michael-hettmer.de" {...{ small }} />
    </div>
);
