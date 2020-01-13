const path = require('path')
const slsw = require('serverless-webpack')

const entries = {}

Object.keys(slsw.lib.entries).forEach(
  key => (entries[key] = ['./source-map-install.js', slsw.lib.entries[key]])
)

const fs = require('fs')

function WebpackBinPermission(options) {
  this.options = options || {}
}

WebpackBinPermission.prototype.apply = function(compiler) {
  compiler.plugin('done', () => {
    const permissions = this.options.permissions || '755'
    const binPath = `${compiler.outputPath}/bin`
    fs.readdir(binPath, (err, items) => {
      if (items && items.length > 0) {
        for (let i = 0; i < items.length; i += 1) {
          fs.chmodSync(`${binPath}/${items[i]}`, permissions)
        }
      }
    })
  })
}

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  plugins: [new WebpackBinPermission()],
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  externals: { bufferutil: 'bufferutil', 'utf-8-validate': 'utf-8-validate' }
}
