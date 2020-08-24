const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

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
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
    }

}
