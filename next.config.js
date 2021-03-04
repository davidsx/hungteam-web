const path = require('path');
// const varScss = path.resolve(__dirname, './src/theme/vars.scss');
// const mixinScss = path.resolve(__dirname, './src/theme/mixins.scss');
// const extendScss = path.resolve(__dirname, './src/theme/extends.scss');
const utils = path.resolve(__dirname, './src/theme/utils.scss');

module.exports = {
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
    sassOptions: {
        additionalData: `@import '${utils}';`,
    },
};
