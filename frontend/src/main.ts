// 方案 1：直接注入组件，并且在 php 页面使用 template
import "element-plus/dist/index.css";
import { createApp } from "vue";
import Counter from "./components/Counter.vue";
import HelloMessage from "./components/HelloMessage.vue";

createApp({ components: { Counter, HelloMessage } }).mount("#app");

// 方案 2：使用 web-components (custom-element)
import styles from "element-plus/dist/index.css?inline";
import { defineCustomElement } from "vue";
// 启动 webcomponents 模式需要命名以.ce.vue结尾 https://cn.vuejs.org/guide/extras/web-components.html#sfc-as-custom-element
import CounterCe from "./components/Counter.ce.vue";

const CounterElement = defineCustomElement(CounterCe, {
  // 要在 shadow-root 里使用外部的 css 似乎需要通过这种方式注入，目前还没有想到什么好办法
  styles: [styles],
});
customElements.define("counter-ce", CounterElement);
