import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import SEO from '~/components/SEO';
import styles from './Home.module.css';

const items = ['Hi.', 'My name is', 'Michael'];
const config = { mass: 5, tension: 2000, friction: 200 };

export default () => {
    const trail = useTrail(items.length, {
        config,
        opacity: 1,
        height: 256 / 3,
        from: { opacity: 0, height: 0 },
    });

    return (
        <>
            <SEO title="Home" />
            <div className={styles.Root}>
                <div className={styles.Top}>
                    <div className={styles.TopContent}>
                        <div className={styles.Avatar}>MH</div>
                        <span className={styles.Greeting}>
                            {trail.map(({ height, ...rest }, index) => (
                                <animated.div key={items[index]} style={{ ...rest }}>
                                    <animated.div style={{ height }}>{items[index]}</animated.div>
                                </animated.div>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
