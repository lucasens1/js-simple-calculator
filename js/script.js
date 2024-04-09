/* 
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


//Definisco le variabili

/*
firstOperando -> è la variabile che uso per immagazzinare il valore alla fine della fase 1
secondOperando -> è la variabile che uso per immagazzinare il valore alla fine della fase 2
operator -> è la variabile usata per immagazzinare l'operatore al click
*/
let firstOperando = ''
let secondOperando = ''
let operator = ''


//Questa variabile CONT sta a definire le varie fasi delle operazioni.
/* 
FASE 0 : Inizializzazione, quindi zero a schermo
FASE 1 : Primo Operatore inserito
FASE 2 : Secondo Operatore Inserito
Questo cont viene resettato al premersi dell'uguale
*/
let cont = 0;

//Prendo i numeri
const numBtns = document.querySelectorAll('.num')
console.log('Questi sono i tasti dei numeri : ',numBtns)


//Prendo i bottoni degli operatori
const opBtns = document.querySelectorAll('.op')
console.log('Questi sono i tasti degli operatori : ',opBtns)


//Prendo il display
let valOnDisplay = document.getElementById('dis_op')
console.log('Questo è il valore on Display : ', valOnDisplay.innerHTML);

//Prendo il bottone uguale
const equalBtn = document.getElementById('result');
console.log('Questo è il btn di uguale ', equalBtn.innerHTML);

//Prendo il bottone canc
const cancBtn = document.querySelector('.canc');
console.log('Questo è il btn di canc :', cancBtn.innerHTML);

//Richiamo la prima funzione per aggiungere l'evento al click sui numeri
addEventToNumBtns(numBtns);
//Richiamo la terza funzione per aggiungere l'evento al click sugli operatori
addEventToOpBtns(opBtns);
//Richiamo la funzione per aggiungere l'evento all'uguale
clickEqual();
//Richiamo la funzione per aggiungere l'evento al click sul canc
clickCanc();



// -------- MILESTONE 1
/**
 * Funzione che inserisce l'evento al click prende il valore del bottone clickato e lo passa alla funzione sotto
 * @param {array} numsArray -> array con al suo interno tutti i numeri del tastierino della Calcolatrice
 */
function addEventToNumBtns(numsArray){
    for(let i = 0; i < numsArray.length; i++){
        numsArray[i].addEventListener("click", function(){
            const btnNum = this.innerHTML;
            console.log('il valore quando clicko su QUESTO bottone è :', btnNum);
            insertInDisplay(btnNum);
        });
    } 
}

/**
 * Inserisce in numeri in display
 * @param {string} val -> variabile che contiene il valore innerHTML del tasto [0,1,2,3,4,5,6,7,8,9]
 */
function insertInDisplay(val){
    console.log('Questo è il valore passato :',val);
    if(cont === 0 || cont === 1){
        if(valOnDisplay.innerHTML === '0'){
            valOnDisplay.innerHTML = val;
            firstOperando += val;
            console.log('Questo è il valore del primo Operando (if) : ',firstOperando)
        }else{
            valOnDisplay.innerHTML += val;
            firstOperando += val;
            console.log('Questo è il valore del primo Operando (if) : ',firstOperando)
        } 
    } else if(cont === 2){
        if(valOnDisplay.innerHTML === '0'){
            valOnDisplay.innerHTML = val;
            secondOperando += val;
            console.log('Questo è il valore del secondo Operando (if) : ',secondOperando)
        }else{
            valOnDisplay.innerHTML += val;
            secondOperando += val;
            console.log('Questo è il valore del secondo Operando (if) : ',secondOperando)
        }
    }  
}
// ----------- /MILESTONE1

// ----------- MILESTONE2
/**
 * funzione che aggiunge l'evento al click sui bottoni degli operatori;
 * @param {array} opsArray
 */
function  addEventToOpBtns(opsArray){
    for(let i = 0; i < opsArray.length; i++){
        opsArray[i].addEventListener("click", function(){
            const btnOps = this.innerHTML;
            console.log('Operatore selezionato : ', btnOps); 
            valOnDisplay.innerHTML = '0';
            operator = btnOps;
            cont = 2;
        })
    }
}
// ----------- /MILESTONE2


//--------- MILESTONE 3
/**
 * Funzione che aggiunge la funzione result() al click sul pulsante =
 */
function clickEqual(){
    equalBtn.addEventListener("click", result)
}

/**
 * Funzione che usa l'operatore e i primi due operandi, essendo variabili globali, scrive il risultato sul display della Calcolatrice
 */
function result(){
    let res = 0;
    switch (operator){
        case '+':
            res = parseInt(firstOperando) + parseInt(secondOperando);
            valOnDisplay.innerHTML = res;
            firstOperando = '';
            secondOperando = '';
            cont = 0;
            break;
        case '-':
            res = parseInt(firstOperando) - parseInt(secondOperando);
            valOnDisplay.innerHTML = res;
            firstOperando = '';
            secondOperando = '';
            cont = 0;
            break;
        case '*':
            res = parseInt(firstOperando) * parseInt(secondOperando);
            valOnDisplay.innerHTML = res;
            firstOperando = '';
            secondOperando = '';
            cont = 0;
            break;
        case '/' :
            res = parseInt(firstOperando) / parseInt(secondOperando);
            valOnDisplay.innerHTML = res;
            firstOperando = '';
            secondOperando = '';
            cont = 0;
            break;
    }   
    console.log('Il risultato è :', res)
}
//---------- /MILESTONE 3

//--------- MILESTONE 4
function clickCanc(){
    cancBtn.addEventListener("click", clearDisplay)
}

//Clear 
function clearDisplay(){
    valOnDisplay.innerHTML = '0';
    firstOperando = ''
    secondOperando = ''
    cont = 0
    operator = ''
}

//--------- /MILESTONE 4