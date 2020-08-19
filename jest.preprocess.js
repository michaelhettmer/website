const babelOptions = {
    presets: ['babel-preset-gatsby'],
};
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = require('babel-jest').createTransformer(babelOptions);
