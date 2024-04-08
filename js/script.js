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
//Seleziono l'array contenente i numeri, ne ottengo la lunghezza lo passo all'interno della funzione
const displayCalculator = document.getElementById('dis_op');
console.log(displayCalculator)

let numbers = document.querySelectorAll(".num");
console.log(numbers);
let len = numbers.length;
addEvNum(numbers, len);



//Milestone 2 :
let operators = document.querySelectorAll(".op");
let lun = operators.length;
addEvOp(operators, lun);

//Milestone 3 :
let equal = document.getElementById('result');
addResult(equal);


