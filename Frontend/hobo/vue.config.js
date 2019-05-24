module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.16.20.84:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/allProducts': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/allProducts': ''
                }
            }
        }
    }
}