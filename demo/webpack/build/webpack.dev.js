// 遵循commonJS规范

const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        open: true,
        hot: true,
        compress: true,
        port: 3000,
        proxy: {
            // 当前段请求 /api 地址时，会将请求转发到
            // 当请求/api/getUserInfo ，此时会转发到http://localhost:9999/api/getUserInfo
            // '/api':'http://localhost:9999'
            '/api':{
                target:'http://localhost:9999',
                // 重写 转发时请求不携带 /api
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    },
    devtool:'eval-cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: 'true'
        })
    ]
})