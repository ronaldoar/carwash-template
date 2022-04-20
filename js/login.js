
$(document).ready(function(){
    doLogin();
});

/**
 * 
 *  valida login
 */
function doLogin(){
    $('#btnConfirmar').click(function(){
        var lg = $('#username').val();
        var ps = $('#password').val();

        if(lg === '' || ps === ''){
            $('.msg').text('Informe o usuário e a senha!');
            $('.msg').show();
            $('.msg').fadeOut(4000);
        }else {
            $('.msg').text('');
            $('.msg').hide();
            window.location.href = "home.html";
        }
    });
}