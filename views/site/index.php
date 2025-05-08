<?php
use app\components\Vite;

echo Vite::assetTags('src/main.ts');
?>

<script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.min.js"></script>

<h5>使用 Vue template + Vue component 注入组件</h5>
<my-counter></my-counter>
<hello-message msg="Test"></hello-message>
<hello-message msg="Hello2"></hello-message>