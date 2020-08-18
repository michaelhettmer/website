import wrapWithProvider from './src/base/wrapWithProvider';
import './src/global.css';

export const wrapRootElement = wrapWithProvider;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
        import(`intersection-observer`);
        console.log(`# IntersectionObserver is polyfilled!`);
    }
};
