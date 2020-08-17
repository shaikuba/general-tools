// Reference official document: https://cli.vuejs.org/config/

// const ProxyAgent = require('proxy-agent')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    outputDir: process.env.outputDir || 'dist',
    assetsDir: 'assets',
    indexPath: 'index.html',
    productionSourceMap: false,
    filenameHashing: false,
    devServer: {
        host: '127.0.0.1',
        port: 8088,
        disableHostCheck: true, // 可使用本地host配置的域名访问
        proxy: {
            '/api': {
                target: process.env.baseURL,
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '/api': '/'
                }
            }
        }

    }
}