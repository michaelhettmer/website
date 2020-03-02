module.exports = {
    '*.{js,jsx,ts,tsx,json,jsonc}': ['eslint --fix'],
    '*.{css,scss}': ['stylelint --fix'],
    '**/.circleci/config.yml': filenames => filenames.map(filename => `npm run lint:circleci "${filename}"`),
};
