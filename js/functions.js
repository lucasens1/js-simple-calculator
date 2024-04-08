/**
 * Funzione per aggiungere gli eventi ai bottoni
 * @param {Array} arr l'array 
 * @param {number} len la lunghezza dell'array
 */
function addEvNum(arr, lun){
    for(let i = 0; i < lun; i++){
        arr[i].addEventListener("click", function(){
            const btnVal = this.innerHTML;
            writeOnDisplay(btnVal);
        });
    } 
}


/**
 * Funzione che aggiunge i numeri sullo schermo della Calcolatrice, prende in entrata nulla, quindi funzione void, si serve dell'elemento span con id = 'op' e scrive al suo interno i numeri presi dalla calcolatrice servendosi di this.
 */
function writeOnDisplay (numVal){
    let displayCalc = document.getElementById('dis_op');
    let numInside = numVal; //this questo (num) scritto
    if(displayCalc.innerHTML === '0'){
        displayCalc.innerHTML = numInside;
    } else {
        displayCalc.innerHTML += numInside;
    }
    let operando1 = displayCalc.innerHTML;
    console.log(operando1);
    return operando1; //non restituisce niente ... 
} 

/**
 * Funzione che con array di operatori permette di aggiungere l'evento a tutti
 * @param {Array} arr
 * @param {number} lun
 */
function addEvOp(arr, lun){
    for(let i = 0; i < lun; i++){
        arr[i].addEventListener("click", function (){
            const val = this.innerHTML;
            operationPoints(val);
        });
    }
}

/**
 * funzione che restituisce operatore
 * @returns {string}
 */
function operationPoints(val){
    let onDisplay = document.getElementById('dis_op');
    let opSelected = val;
    console.log(opSelected);
    let opSel = '';
    if(opSelected === '+') {
        opSel = '+';
        onDisplay.innerHTML = "0";
    } else if(opSelected === '-') {
        opSel = '-';
        onDisplay.innerHTML = "0";
    } else if(opSelected === '*') {
        opSel = '*';
        onDisplay.innerHTML = "0";
    } else {
        opSel = '/';
        onDisplay.innerHTML = "0";
    } return opSel; // niente ...
}

function addResult(res){
    res.addEventListener("click", resultCalc);
}

function resultCalc(){
    console.log('ciao');
}