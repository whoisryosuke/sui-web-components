module.exports = {
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-storysource",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-docs"
  ],
  stories: ["../src/components/**/*.stories.(js|mdx)"]
};
