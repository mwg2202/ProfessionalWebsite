const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                include: __dirname + '/src',
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/homepage.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/slick', to: 'slick'},
                { from: 'src/assets', to: 'assets'}
            ]
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
    }

}
