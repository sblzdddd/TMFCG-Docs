// vuetify.config.ts
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { MystiaLightTheme } from "./src/styles/themes/vuetify/Mystia";
import { md3 } from "vuetify/blueprints";

export default defineVuetifyConfiguration({
  blueprint: md3,
  theme: {
    defaultTheme: "mystiaLight",
    themes: {
      mystiaLight: MystiaLightTheme,
    },
  },
});
