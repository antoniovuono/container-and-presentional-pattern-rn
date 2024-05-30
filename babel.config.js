module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      // ['@babel/preset-env', { targets: { node: 'current' } }], -> error on react-native 0.74.0
      '@babel/preset-typescript',
    ],
  };
};
