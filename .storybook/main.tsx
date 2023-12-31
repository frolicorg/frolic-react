var path = require('path');
module.exports = {
  "stories": ['../src/**/*.mdx', "../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/addon-docs', {
    name: '@storybook/addon-postcss',
    options: {
      cssLoaderOptions: {
        // When you have splitted your css over multiple files
        // and use @import('./other-styles.css')
        importLoaders: 1
      },
      postcssLoaderOptions: {
        // When using postCSS 8
        implementation: require('postcss')
      }
    }
  }],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  features: {
    previewMdx2: true
  },
  webpackFinal: async config => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, "../src")];
    return config;
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook
};