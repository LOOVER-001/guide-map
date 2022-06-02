// 遵循commonJS规范
// path 用于拼接绝对路径
const path = require('path')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const MiniCsssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index:'./src/index.js'
        // 多页面、多入口打包
        // other:'./src/other.js'
    },
    output: {
        // path.resolve(): 解析当前相对路径的绝对路径
        // path.join(): 路径拼接
        // path: path.resolve('./dist/'),
        // 绝对路径：__dirname 当前目录 '..'上一层目录
        // 相对路径： 相对项目跟目录
        path: path.join(__dirname,'..','./dist/'),
        filename:'[name].js',
        publicPath:'/'
    },
    plugins:[
        // devserver时，index.html 放服务器根目录下
        // devserver时，index.html 自动引入bundle.js
        // 打包时放到dist目录下
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html',
            // 多页应用使用chunks
            // chunks: ['index']
        }),
        // new HtmlWebpackPlugin({
        //     filename:'other.html',
        //     template: './src/other.html',
        //     chunks: ['other']
        // }),
        // dist目录清空
        new CleanWebpackPlugin(),
        // 拷贝到dist目录
        new CopyWebpackPlugin(
        {patterns: [
            {
                // __dirname 根目录
                from: path.join(__dirname,'..','assets'),
                to:'assets'
            }
        ]}),
        new webpack.BannerPlugin('版权信息--'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // 将main.js里面的css合并到一起
        new MiniCsssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            {
                // \转义 $以结尾
                test: /\.css$/,
                // css-loader 解析css文件 style-loader 放到html中
                // use:['style-loader','css-loader']
                use:[MiniCsssExtractPlugin.loader,'css-loader','postcss-loader']
            },
            {
                test: /\.less$/,use:[MiniCsssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
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
    }
}