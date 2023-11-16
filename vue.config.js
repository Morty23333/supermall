// const { defineConfig } = require('@vue/cli-service')
// module.exports = {
//     configurewebpack: {
//         resolve: {
//             alias: {
//                 'assets': '@/assets',
//                 'common': '@/common',
//                 'components': '@/components',
//                 'network': '@/network',
//                 'views': '@/views'

//             }
//         }
//     }
//     chainWebpack:(config)=>{
//         config.resolve.alias
//         .set('@',resolve('./src'))
//         .set('assets',resolve('@/assets'))
//         .set('common',resolve('@/common'))
//         .set('components',resolve('@/components'))
//         .set('network',resolve('@/network'))
//         .set('view',resolve('@/view'))
//     }
// }

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
