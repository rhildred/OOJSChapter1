/** @type { import('@storybook/react').Preview } */
import "w3-css/w3.css";
import "diy-pwa/style.css";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
