import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './Projects.module.css';

export default (): JSX.Element => (
    <div className={styles.Root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Projects</Typography>
            </Toolbar>
        </AppBar>
    </div>
);
