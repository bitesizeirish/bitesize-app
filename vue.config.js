const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        '/mnt/data/projects/bitesize-app/src/assets/custom.scss'
      ]
    },
    s3Deploy: {
      assetPath: 'dist',
      bucket: 'bitesize-web-app',
      region: 'eu-west-1',
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5
    }
  },
  configureWebpack: {
    devtool: "source-map"
  }
};
