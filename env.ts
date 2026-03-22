import type { EnvOptions } from "tnp/src";

const env: Partial<EnvOptions> = {
  website: {
    domain: "org-standalone-proj.example.domain.com",
    title: "Org Standalone Proj",
    useDomain: true,
  },
  loading: {
    preAngularBootstrap: {
      background: "#fdebed",
      loader: { name: "lds-default" },
    },
  },
};
export default env;
