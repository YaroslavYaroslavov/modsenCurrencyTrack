const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    target: 'web',
    entry: './index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index_bundle.js',
    },

    devServer: {
        port: '5000',
        static: {
            directory: path.join(__dirname, 'public'),
        },
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.json'],
        fallback: {
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
            crypto: require.resolve('crypto-browserify'),
            buffer: require.resolve('buffer/'),
            stream: require.resolve('stream-browserify'),
        },
    },
    module: {
        rules: [
            { test: /\.(jpg|png)$/, use: { loader: 'url-loader' } },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new HtmlMinimizerPlugin(), new CssMinimizerPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],
};
