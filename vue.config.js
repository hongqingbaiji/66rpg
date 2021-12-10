const path = require('path') //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
      .set('network', resolve('./src/network'))
      .set('common', resolve('./src/common'))
      .set('views', resolve('./src/views'))
  }

  // axios: {
  //   proxy: true,
  //   prefix:
  //     process.env.NODE_ENV === 'dev'
  //       ? '/test'
  //       : process.env.NODE_ENV === 'debug'
  //       ? '/debug'
  //       : process.env.NODE_ENV === 'main'
  //       ? '/main'
  //       : '',
  //   credentials: true
  // },

  // proxy: {
  //   '/test': {
  //     target: 'http://test-www.66rpg.com',
  //     ws: true,
  //     pathRewrite: {
  //       '^/test': '/',
  //       changeOrigin: true
  //     },
  //     router({ headers }) {
  //       return 'https://' + branch + (headers.domain ? headers.domain : 'www') + '.66rpg.com/'
  //     }
  //   },
  //   '/debug': {
  //     target: 'http://debug-www.66rpg.com',
  //     ws: true,
  //     pathRewrite: {
  //       '^/debug': '/',
  //       changeOrigin: true
  //     },
  //     router({ headers }) {
  //       return 'http://' + branch + (headers.domain ? headers.domain : 'www') + '.66rpg.com/'
  //     }
  //   },
  //   '/main': {
  //     target: 'http://www.66rpg.com',
  //     ws: true,
  //     pathRewrite: {
  //       '^/main': '/',
  //       changeOrigin: true
  //     },
  //     router({ headers }) {
  //       return 'http://' + branch + (headers.domain ? headers.domain : 'www') + '.66rpg.com/'
  //     }
  //   }
  // }
}
