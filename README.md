## ローディング何使ってる？

昨年末からWebアプリケーションを作成していて、ローデイングが必要になり、JQueryで実装していたのですがあまりしっくりこずに、悩んでいたことろfakeloader.jsというライブラリがとても良かったので共有したいと思います。

## fakeloader.jsの概要
以下のjsファイルをインストールして、読み込ませて実装します。

* fakeLoader.css
* fakeLoader.min.js or fakeLoader.js

#### インストール
[fakeloader.js オフィシャルページ](http://joaopereirawd.github.io/fakeLoader.js/)

[ソースインストール](https://github.com/joaopereirawd/fakeLoader.js)

## fakeloader.jsデモ
![ローディング.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/da531685-655f-67ac-574b-756ee87fad63.gif)

![ローディング_1.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/67d30dee-9848-db5f-43e8-04163cbb0cae.gif)

![ローディング_2.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/e1bc6f6f-aed8-b6c5-15fa-ded32fe1554a.gif)

![ローディング_3.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/728a2021-b9b8-e3b4-aace-e4eca48cf271.gif)

![ローディング_4.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/7397b30f-1564-7312-822a-274a3967232b.gif)

![ローディング_5.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/d2c41c6c-2b69-631f-a099-b66e78171aee.gif)

![ローディング_6.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/b4fb36f4-0fa8-0dce-a61f-846a2891d747.gif)

```HTML:index.html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>fakeloade_demo</title>
 
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/fakeLoader.css">
 
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<script src="assets/fakeloader/fakeLoader.min.js"></script>
<script src="assets/js/main.js"></script>
 
</head>
  <body>
    
    <div id='fakeloader'  class="fakeloader"></div>      
    <div id='fakeloader_1'  class="fakeloader"></div>
    <div id='fakeloader_2'  class="fakeloader"></div>
    <div id='fakeloader_3'  class="fakeloader"></div>
    <div id='fakeloader_4'  class="fakeloader"></div>
    <div id='fakeloader_5'  class="fakeloader"></div>
    <div id='fakeloader_6'  class="fakeloader"></div>
  
   <section class="section">
     <div class="section__block section__block--scoped">
        <h3>fakeloade_demo</h3>                  
        <fieldset class="fieldset fieldset--demo">
          <button id="fake_1" class="fieldset__button button button--small">fake_1</button>
          <button id="fake_2" class="fieldset__button button button--small">fake_2</button>
          <button id="fake_3" class="fieldset__button button button--small">fake_3</button>
          <button id="fake_4" class="fieldset__button button button--small">fake_4</button>
          <button id="fake_5" class="fieldset__button button button--small">fake_5</button>
          <button id="fake_6" class="fieldset__button button button--small">fake_6</button>
        </fieldset>
      </div>
    </section>
  </body>
</html>

```

``` javascript:main.js
$(function(){

    //ローディング処理
    $(document).ready(function(){
        $("#fakeloader").fakeLoader({
            timeToHide: 1200,
            spinner: "spinner3",
            bgColor: "#1abc9c"
        });
    });

    $('#fake_1').on('click',function(){
        console.log('fake_1 PUSH!!');
        $('#fakeloader_1').fakeLoader({
            timeToHide:1200,
            bgColor:"#9b59b6",
            spinner:"spinner7"
        });
    });

    $('#fake_2').click(function(){
        console.log('fake_2 PUSH!!');
        $('#fakeloader_2').fakeLoader({
            timeToHide:1200,
            bgColor:"#e74c3c",
            spinner:"spinner2"
        });
    });

    $('#fake_3').click(function(){
        console.log('fake_3 PUSH!!');
        $('#fakeloader_3').fakeLoader({
            timeToHide:1200,
            bgColor:"#3498db",
            spinner:"spinner4"
        });
    });

    $('#fake_4').click(function(){
        console.log('fake_4 PUSH!!');
        $('#fakeloader_4').fakeLoader({
            timeToHide:1200,
            bgColor:"#34495e",
            spinner:"spinner3"
        });
    });

    $('#fake_5').click(function(){
        console.log('fake_5 PUSH!!');
        $('#fakeloader_5').fakeLoader({
            timeToHide:1200,
            bgColor:"#e67e22",
            spinner:"spinner5"
        });
    });

    $('#fake_6').click(function(){
        console.log('fake_6 PUSH!!');
        $('#fakeloader_6').fakeLoader({
            timeToHide:1200,
            bgColor:"#1abc9c",
            spinner:"spinner6"
        });
    });

});

```

実装もとても簡単で、豊富な種類から選択することができます。
デモページを試してみて、ぜひ使ってみてください。

## デモページ & Github
### デモペーシ
[http://tech-portfolio.org/demo/fakeloader](http://tech-portfolio.org/demo/fakeloader/)
### Github（ソース）
[https://github.com/FujiyamaYuta/fakeloader_demo](https://github.com/FujiyamaYuta/fakeloader_demo)
