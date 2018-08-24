module.exports = {
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
            path.resolve(__dirname, 'src/assets/custom.scss'),
        ]
      }
    }
}