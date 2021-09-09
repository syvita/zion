module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
      });
  
      return config;
    },
  };