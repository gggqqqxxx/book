module.exports = {
    publicPath:'./', // 修改基础路径
    lintOnSave: false, // 保存代码时  忽略eslint

    devServer: {
        // open: true,
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hotOnly: false,
 disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                changeOrigin: true,
                // pathRewrite: {                //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                //     '^/api': ''
                // }
            },
            '/cats': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true,
                pathRewrite: {                //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/api': ''
                }
            }
            }
        }
    }

