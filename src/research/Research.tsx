import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './Research.module.css';

export default () => (
    <div className={styles.Root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Research</Typography>
            </Toolbar>
        </AppBar>
    </div>
);
