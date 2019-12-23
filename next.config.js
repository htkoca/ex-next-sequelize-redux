module.exports = {
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = __dirname;
    return config;
  }
};
