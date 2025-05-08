<?php
namespace app\components;

use Yii;

class Vite
{
  public static function isDev()
  {
    // 只要端口联通就是 dev，推荐做 curl 请求
    try {
      $fp = @fsockopen('localhost', 5173);
      if ($fp) {
        fclose($fp);
        return true;
      }
    } catch (\Throwable $e) {
    }
    return false;
  }

  public static function assetTags(string $entryJs = 'main.js')
  {
    if (self::isDev()) {
      $viteServer = 'http://localhost:5173';
      return <<<HTML
                <script type="module" src="{$viteServer}/@vite/client"></script>
                <script type="module" src="{$viteServer}/{$entryJs}"></script>
            HTML;
    } else {
      $manifest = json_decode(file_get_contents(Yii::getAlias('@webroot/assets/vue-build/.vite/manifest.json')), true);
      $entry = $manifest[$entryJs];
      $tags = '';
      $tags .= '<link rel="stylesheet" href="/assets/vue-build/' . $manifest['style.css']['file'] . '">' . "\n";
      $tags .= '<script type="module" src="/assets/vue-build/' . $entry['file'] . '"></script>';
      return $tags;
    }
  }
}

