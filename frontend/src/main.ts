// 方案 1：直接注入组件，并且在 php 页面使用 template
import "element-plus/dist/index.css";
import { createApp } from "vue";
import Counter from "./components/Counter.vue";
import HelloMessage from "./components/HelloMessage.vue";

createApp({ components: { Counter, HelloMessage } }).mount("#app");

// 方案 2：使用 web-components (custom-element)
import { defineCustomElement } from "vue";
// 启动 webcomponents 模式需要命名以.ce.vue结尾 https://cn.vuejs.org/guide/extras/web-components.html#sfc-as-custom-element
import CounterCe from "./components/Counter.ce.vue";

const CounterElement = defineCustomElement(CounterCe, { shadowRoot: false }); // 不使用 shadowRoot 可以共享 主页面 的样式

customElements.define("counter-ce", CounterElement);
