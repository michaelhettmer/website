import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import SEO from '~/components/SEO';
import styles from './Home.module.css';

const items = ['Hi.', 'My name is', 'Michael'];
const config = { mass: 5, tension: 2000, friction: 200 };

export default () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setTimeout(() => setToggle(true), 200);
    }, []);

    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <>
            <SEO title="Home" />
            <div className={styles.Root}>
                <div className={styles.Top}>
                    <div className={styles.TopContent}>
                        <div className={styles.Avatar}>MH</div>
                        <span className={styles.Greeting}>
                            {trail.map(({ x, height, ...rest }, index) => (
                                <animated.div
                                    key={items[index]}
                                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
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
