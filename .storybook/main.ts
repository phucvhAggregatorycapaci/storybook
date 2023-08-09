import type { StorybookConfig } from "@storybook/vue3-webpack5";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve('postcss'),
        },
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },

      },
    },
  ],
  webpackFinal: async (config:any, { configType }) => {
       config!.resolve.plugins = [new TsconfigPathsPlugin()];//<-- this line
       return config;
  },
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
