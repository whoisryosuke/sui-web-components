/* global window */
import { html } from "lit-html";
import {
  configure,
  addDecorator,
  addParameters,
  setCustomElements
} from "@storybook/web-components";
import { withA11y } from "@storybook/addon-a11y";

import customElements from "../custom-elements.json";

import { applyPolyfills, defineCustomElements } from "../loader";

// Load Stencil.JS Web Components
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Wrap all stories in the base component
addDecorator(
  storyFn =>
    html`
      <sui-base>${storyFn()}</sui-base>
    `
);

// Load custom-element.json for documentation of props
setCustomElements(customElements);

// Check all components for a11y rules
addDecorator(withA11y);

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true
    }
  },
  backgrounds: [
    { name: "light", value: "#FFF", default: true },
    { name: "dark", value: "#010101" }
  ],
  options: {
    showRoots: true
  },
  docs: {
    iframeHeight: "200px"
  }
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context("../src/", true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
