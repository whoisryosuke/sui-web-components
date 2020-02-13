module.exports = {
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-docs"
  ],
  stories: [
    "../stories/**/*.stories.(js|mdx)",
    "../src/components/**/*.stories.(js|mdx)"
  ]
};
