// const s: string = 'Hello Typescript'
// console.log(s)


import { createApp } from "vue";

import SButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// createApp(SButton)
// createApp(SFCButton)
createApp(JSXButton)

.mount("#app");