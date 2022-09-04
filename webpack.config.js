path = require('path');
htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'./src/js/index.js'),
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "img-optimize-loader",
                options: {
                    name: '[name].[ext]',
                    compress: {
                        mode: 'high',
                        webp: true,
                        gifsicle: true,
                        disableOnDevelopment: false
                    }
                }
            },
            {
                test: /\.mp[34]$/i,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "./src/index.html")
            }
        )
    ]
}


