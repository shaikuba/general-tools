const ProxyAgent = require('proxy-agent')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    outputDir: process.env.outputDir || 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    productionSourceMap: false,
    devServer: {
        port: 8088,
        disableHostCheck: true, // 可使用本地host配置的域名访问
        proxy: {
            '/': {
                target: 'http://127.0.0.1:8888',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '/': '/'
                }
            }
        }

    }
}