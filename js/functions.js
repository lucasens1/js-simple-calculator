/**
 * Funzione per aggiungere gli eventi ai bottoni
 * @param {Array} arr l'array 
 * @param {number} len la lunghezza dell'array
 */
function addEvNum(arr, lun){
    for(let i = 0; i < lun; i++){
        arr[i].addEventListener("click", writeOnDisplay);
        console.log(arr[i]);
    } 
}


/**
 * Funzione che aggiunge i numeri sullo schermo della Calcolatrice, prende in entrata nulla, quindi funzione void, si serve dell'elemento span con id = 'op' e scrive al suo interno i numeri presi dalla calcolatrice servendosi di this.
 */
function writeOnDisplay (){
    let displayCalc = document.getElementById('dis_op');
    let numInside = this.innerHTML;
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
        arr[i].addEventListener("click", operationPoints);
    } return opSel; // niente ... 
}

/**
 * funzione che restituisce operatore
 * @returns {string}
 */
function operationPoints(){
    let onDisplay = document.getElementById('dis_op');
    let opSelected = this.innerHTML;
    console.log(opSelected);
    let opSel = "";
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