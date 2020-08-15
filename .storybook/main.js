
const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, './'),
    });

    // Return the altered config
    return config;
  },
  // config.resolve.modules = [

  // ],

  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    // '@storybook/addon-controls',
    // '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    {
      name:'@storybook/addon-docs',
      options: { configureJSX: true }
    },
    '@storybook/addon-links',
  ],
};
