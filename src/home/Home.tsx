import React from 'react';
import SEO from '~/components/SEO';
import styles from './Home.module.css';

export default () => {
    return (
        <>
            <SEO title="Home" />
            <div className={styles.Root}>
                <div className={styles.Top}>
                    <div className={styles.TopContent}>
                        <div className={styles.Avatar}>MH</div>
                        <span className={styles.Greeting}>
                            Hi.
                            <br />
                            My name is
                            <br />
                            Michael
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
