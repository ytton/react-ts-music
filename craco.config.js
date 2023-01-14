const path = require('path');
const resolve = (str) => path.resolve(__dirname, str);
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components/'),
      utils: resolve('src/utils/')
    },
    plugins: {},
    configure: {}
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' } //自定义less变量
          }
        }
      }
    }
  ]
};
