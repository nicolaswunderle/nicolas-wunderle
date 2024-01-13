import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import base from "./configBase.js";

// https://astro.build/config
export default defineConfig({
  site: "https://nicolaswunderle.github.io/",
  base: base,
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
