module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    // '../**/*.stories.mdx',
    // '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules',
    'storybook-tailwind-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       loaders: [
  //         require.resolve('style-loader'),
  //         {
  //           loader: require.resolve('css-loader'),
  //           options: {
  //             importLoaders: 1,
  //             modules: true,
  //             localIdentName: '[name]__[local]___[hash:base64:5]',
  //           },
  //         },
  //         // require.resolve("sass-loader"),
  //       ],
  //     },
  //   ],
  // },
  // webpackFinal: (config) => {
  //   /**
  //    * Add support for alias-imports
  //    * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
  //    */
  //   config.resolve.alias = {
  //     ...config.resolve?.alias,
  //     '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
  //   }

  //   /**
  //    * Fixes font import with /
  //    * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
  //    */
  //   config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules']

  //   return config
  // },
}
