/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);

exports.createPages = async ({ actions: { createPage }, reporter }) => {
    const activity = reporter.activityTimer(`creating pages`);
    activity.start();

    createPage({
        path: `/404`,
        component: path.resolve(`./src/base/404.tsx`),
    });

    createPage({
        path: `/`,
        component: path.resolve(`./src/home/Home.tsx`),
    });

    createPage({
        path: `/projects`,
        component: path.resolve(`./src/projects/Projects.tsx`),
    });

    createPage({
        path: `/blog`,
        component: path.resolve(`./src/blog/Blog.tsx`),
    });

    createPage({
        path: `/research`,
        component: path.resolve(`./src/research/Research.tsx`),
    });

    activity.end();
};
