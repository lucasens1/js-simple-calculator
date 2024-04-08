/* COMMENTO : shift + alt + a
MILESTONE 1
aggiungere event listener a tutti i numeri (0-9)
quando si clicca su un numero, concatenarlo al numero visualizzato in alto
MILESTONE 2
aggiungere event listener a tutti gli operatori
quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
MILESTONE 3
aggiungere event listener al pulsante =
quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo */

//Milestone 1 :
let numbers = document.querySelectorAll(".num");
console.log(numbers);
let len = numbers.length;
console.log(len);

addEv(numbers, len);
