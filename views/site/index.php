<?php
use app\components\Vite;

echo Vite::assetTags('src/main.ts');
?>

<div id="app">
  <h5>方案 1 - 使用 Vue template + Vue component 注入组件</h5>
  <counter></counter>
  <hello-message msg="Test"></hello-message>
  <hello-message msg="Hello2"></hello-message>
</div>


<h5>方案 2 - 使用 Vue template + Vue component 注入组件</h5>
<counter-ce></counter-ce>