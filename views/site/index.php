<?php
use app\components\Vite;

echo Vite::assetTags('src/main.ts');
?>


<h5>使用 Vue template + Vue component 注入组件</h5>
<my-counter></my-counter>
<hello-message msg="Test"></hello-message>
<hello-message msg="Hello2"></hello-message>