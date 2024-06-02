$(document).ready(function(){

    $('.mensagemInicio').show();

    $('#buttonInicio').click(function(){
        $('.mensagemInicio').slideUp(2000);
        $('.secaoMensagem').slideDown(3000);
    });

    $('#buttonFotos').click(function(){
        $('.secaoMensagem').slideUp(1000);
        $('.secaoFotos').slideDown(7000);
    });

    $('#buttonFotosFuturas').click(function(){
        $('.secaoFotos').slideUp(2000);
        $('.mensagemFuturo').slideDown(6000);
    });

    $('#buttonVoltarInicio').click(function(){
        $('.secaoFotos').slideUp(2000);
        $('.mensagemInicio').slideDown(6000);
    });
    

    $('#buttonEncerrar').click(function(){
        $('.mensagemFuturo').slideUp(3000);
        $('.mensagemInicio').slideDown(3000);
    });


})