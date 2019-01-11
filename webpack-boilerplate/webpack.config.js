const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [
            // new UglifyJsPlugin({
            //  }),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    },
}