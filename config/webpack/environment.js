const { environment } = require('@rails/webpacker')

module.exports = environment

environment.config.node = {
  __dirname: true,
  __filename: true,
  global: true,
}
