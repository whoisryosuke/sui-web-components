import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { customElements } from "@dcylabs/stencil-custom-elements-json";

export const config: Config = {
  namespace: "sui-web-components",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    },
    customElements()
  ],
  plugins: [sass()]
};
