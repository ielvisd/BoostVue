import type { App } from "vue";
import { BoostVueButton } from "./components";

export default {
  install: (app: App, options: { img: string } = { img: "" }) => {
    app.component("BoostVueButton", BoostVueButton);
    app.provide("content", options.content);
  },
};

export { BoostVueButton };
