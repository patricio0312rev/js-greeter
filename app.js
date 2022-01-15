var g = G$('Juan', 'Marroquin');

console.log(g);

g.greet();

g.greet().greet(true);

g.greet().setLang('es').greet(true);
// g.greet().setLang('fr').greet(true).log();
g.greet().setLang('es').greet(true).log();

// Testing HTML Selector
$('#login').click(function() {
    var loginGrtr = G$('Juan', 'Marroquin');
    $('#loginDiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})