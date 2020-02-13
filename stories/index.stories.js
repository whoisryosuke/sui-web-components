import { html } from "lit-html";
import { withKnobs } from "@storybook/addon-knobs";
import { withWebComponentsKnobs } from "storybook-addon-web-components-knobs";

export default {
  title: "Demo",
  component: "sui-button",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: "storybookjs/knobs/panel" } }
};

export const Heading = () => html`
  <h1>Hello World</h1>
`;

export const Button = () => html`
  <sui-button text="Submit"></sui-button>
`;

export const SettingProperties = () => html`
  <my-component .data=${{ header: "foo", state: true }}
    >Hello World</my-component
  >
`;

export const Events = () => html`
  <button @click=${ev => console.log("clicked button")}>
    clicking will get logged to console
  </button>
`;

export const WithFunction = () => {
  const header = "My Header";
  return html`
    <h1>${header}</h1>
  `;
};
