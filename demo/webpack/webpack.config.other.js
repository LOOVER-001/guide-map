// 遵循commonJS规范

const path = require('path')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')


module.exports = {
    entry: {
        index:'./src/index.js',
        other:'./src/other.js'
    },
    output: {
        // path.resolve(): 解析当前相对路径的绝对路径
        // path.join(): 路径拼接
        // path: path.resolve('./dist/'),
        path: path.join(__dirname,'./dist/'),
        filename:'[name].bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        hot: true,
        compress: true,
        port: 3000,
        static: './src'
    },
    plugins:[
        // devserver时，index.html 放服务器根目录下
        // devserver时，index.html 自动引入bundle.js
        // 打包时放到dist目录下
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename:'other.html',
            template: './src/other.html',
            chunks: ['other']
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
        {patterns: [
            {
                // __dirname 根目录
                from: path.join(__dirname,'assets'),
                to:'assets'
            }
        ]}),
        new webpack.BannerPlugin('版权信息--'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                // \转义 $以结尾
                test: /\.css$/,
                // css-loader 解析css文件 style-loader 放到html中
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader'
                    // options: {
                    //     // 预设
                    //     presets:['@bable/env'],
                    //     // 高级
                    //     plugins:['@babel/plugin-proposal-class-properties']
                    // }
                }
            },
            {
                // 用于解析jQuery的绝对路径
                test: require.resolve('jquery'),
                use: {
                    loader: 'expose-loader',
                    options: '$'
                }
            }
        ]
    },
    devtool:'eval-cheap-module-source-map'
}