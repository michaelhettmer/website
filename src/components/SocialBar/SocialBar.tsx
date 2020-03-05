import React from 'react';
import { IconButton } from '@material-ui/core';
import { GitHub, Twitter, Mail } from '@material-ui/icons';
import styles from './SocialBar.module.css';

const SocialButton = ({ Icon, url }: { Icon: React.ElementType; url: string }) => (
    <a href={url}>
        <IconButton classes={{ root: styles.IconButton }}>
            <Icon className={styles.Icon} fontSize="large" />
        </IconButton>
    </a>
);

export default () => (
    <div className={styles.Root}>
        <SocialButton Icon={Twitter} url="https://twitter.com/MichaelHettmer" />
        <SocialButton Icon={GitHub} url="https://github.com/MichaelHettmer" />
        <SocialButton Icon={Mail} url="mailto:mail@michael-hettmer.de" />
    </div>
);
