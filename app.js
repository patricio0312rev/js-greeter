var g = G$('Juan', 'Marroquin');

console.log(g);

g.greet();

g.greet().greet(true);

g.greet().setLang('es').greet(true);
g.greet().setLang('fr').greet(true);