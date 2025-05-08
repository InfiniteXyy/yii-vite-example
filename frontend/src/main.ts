import { defineCustomElement } from "vue";
// 启动 webcomponents 模式需要命名以.ce.vue结尾 https://cn.vuejs.org/guide/extras/web-components.html#sfc-as-custom-element
import Counter from "./components/Counter.ce.vue";
import HelloMessage from "./components/HelloMessage.ce.vue";

const CounterElement = defineCustomElement(Counter, { shadowRoot: false }); // 不使用 shadowRoot 可以共享 主页面 的样式
const HelloMessageElement = defineCustomElement(HelloMessage, {
  shadowRoot: false,
});

customElements.define("my-counter", CounterElement);
customElements.define("hello-message", HelloMessageElement);
