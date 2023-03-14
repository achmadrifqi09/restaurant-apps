const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 1000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization',
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true,
    },
});
