module.exports = {
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
    css: {
        //extract: true,// 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false,// 开启 CSS source maps
        loaderOptions: {},// css预设器配置项
        modules: false// 启用 CSS modules for all css / pre-processor files.
    },
    productionSourceMap: false,
    //    兼容ie
    chainWebpack: config => {
        // 其他配置
        config.entry('main').add('babel-polyfill') // main是入口js文件
        // 其他配置
    },
    // 路由懒加载配置
    chainWebpack(config) {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    },
    publicPath: './',
}