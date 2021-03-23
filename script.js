/**
 * Consegna
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

1. Creo un loop da 1 a 100;
2. FizzBuzz: stampo tutti i numeri il cui modulo di 3 e 5 da zero;
3. Fizz: stampo tutti i numeri il cui modulo di 3 è zero;
4. Buzz: stampo tutti i numeri il cui modulo di 5 è zero;
5. Se non si verifica uno dei casi indicati, allora stampo il numero incrementato dal ciclo.

 */


//Variabili
var maxNumber = 100; 
var number = 0;

//ciclo da 1 a 100
for (var number = 1; number <= maxNumber; number++) {

   
    if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log('FizzBuzz: ' + number + ' -> è multiplo di 3 e 5');
    }else if (number % 3 === 0){
        console.log('Fizz: ' + number + ' -> è multiplo di 3');
    }else if (number % 5 === 0) {
        console.log('Buzz: ' + number + ' -> è multiplo di 5');
    }else {
        console.log(number);
    }
}