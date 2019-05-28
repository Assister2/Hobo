module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://[::1]:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/Cart': {
                target: 'http://[::1]:8082/',
                changeOrigin: true,
                pathRewrite: {
                    '^/Cart': ''
                }
            },
            '/allProducts': {
                target: 'http://[::1]:8084/',
                changeOrigin: true,
                pathRewrite: {
                    '^/allProducts': ''
                }
            },
            '/goToProduct': {
                target: 'http://[::1]:8084/',
                changeOrigin: true,
                pathRewrite: {
                    '^/goToProduct': ''
                }
            },
            '/merchantProduct': {
                target: 'http://[::1]:8083/',
                changeOrigin: true,
                pathRewrite: {
                    '^/merchantProduct': ''
                }
            },
            '/fetchCartProduct': {
                target: 'http://[::1]:8084/',
                changeOrigin: true,
                pathRewrite: {
                    '^/fetchCartProduct': ''
                }
            },
            '/fetchBuyNowProduct': {
                target: 'http://[::1]:8084/',
                changeOrigin: true,
                pathRewrite: {
                    '^/fetchBuyNowProduct': ''
                }
            },
            '/user': {
                target: 'http://[::1]:8081/',
                changeOrigin: true,
                pathRewrite: {
                    '^/user': ''
                }
            },
            '/merchant': {
                target: 'http://172.16.20.84:8081/',
                changeOrigin: true,
                pathRewrite: {
                    '^/merchant': ''
                }
            },
            '/orderProduct': {
                target: 'http://[::1]:8082/',
                changeOrigin: true,
                pathRewrite: {
                    '^/orderProduct': ''
                }
            },
            '/order': {
                target: 'http://[::1]:8082/',
                changeOrigin: true,
                pathRewrite: {
                    '^/order': ''
                }
            },
            '/searchpage': {
                target: 'http://[::1]:8085/',
                changeOrigin: true,
                pathRewrite: {
                    '^/searchpage': ''
                }
            }
        }
    }
}