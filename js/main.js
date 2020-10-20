// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
var somma = 0;
var lista = [];
numero = 0;
for (var i = 0; i < 100; i++) {
  numero += 1;
  lista.push(numero);
  if ( (numero % 3 == 0) && (numero % 5 != 0) ) {
    lista.pop(numero);
    lista.push("fizz") ;

  }else if ( (numero % 5 == 0) && (numero % 3 != 0) ) {
    lista.pop(numero);
    lista.push ("buzz") ;


  }
  else if ( (numero % 3 == 0) && (numero % 5 == 0) ){
    lista.pop(numero);
    lista.push("FizzBuzz") ;
  }
}
document.getElementById("html").innerHTML = lista;
console.log(lista);
