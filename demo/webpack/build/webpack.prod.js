// 遵循commonJS规范
// 优化配置
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig,{
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: 'false'
        })
    ],
    // 优化节点
    optimization: {
        minimizer: [new CssMinimizerPlugin()]
    }
})