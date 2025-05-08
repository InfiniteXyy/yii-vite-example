import { defineCustomElement } from "vue";
// 启动 webcomponents 模式需要命名以.ce.vue结尾 https://cn.vuejs.org/guide/extras/web-components.html#sfc-as-custom-element
import Counter from "./components/Counter.ce.vue";
import HelloMessage from "./components/HelloMessage.ce.vue";

// 不使用 shadowRoot 可以共享 主页面 的样式
customElements.define(
  "my-counter",
  defineCustomElement(Counter, { shadowRoot: false })
);

customElements.define(
  "hello-message",
  defineCustomElement(HelloMessage, { shadowRoot: false })
);
