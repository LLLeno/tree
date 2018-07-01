const path = require('path')

module.exports = {
    context: path.resolve(__dirname,'./src'),
    entry: './index.js',
    output:
        {
            path: path.resolve(__dirname,'./dist'),
            filename: 'bundle.js',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
    module:
        {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
        }
};