import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import MyLayout from "./components/MyLayout.vue";
import About from "./components/About.vue";
import CV from "./components/cv.vue";
import Research from "./components/Research.vue";

import "./custom.css";
import './mathjax3.css';


export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    // register global components
    app.component("Archives", Archives);
    // app.component("Tags", Tags);
    app.component("About", About);
    app.component("CV", CV);
    app.component("Research", Research);
  },
};
