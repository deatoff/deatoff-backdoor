import "./index.css";
import App from "./App.svelte";

// Class constructor SvelteComponent cannot be invoked without 'new' #44
// @see https://github.com/DeMoorJasper/parcel-plugin-svelte/issues/44#issuecomment-487211932
const app = new App({
  target: document.body,
  props: {
    name: "deatoff-backdoor"
  }
});

export default app;
