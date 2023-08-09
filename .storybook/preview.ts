import type { Preview } from "@storybook/vue3";
import '../src/assets/scss/auth.scss'
import '../src/assets/scss/tailwind.scss'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
