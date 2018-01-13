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