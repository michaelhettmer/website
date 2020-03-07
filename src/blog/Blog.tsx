import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './Blog.module.css';

export default () => (
    <div className={styles.Root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Blog</Typography>
            </Toolbar>
        </AppBar>
    </div>
);
