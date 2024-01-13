import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: config.site.prod,
  base: config.site.base,
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
