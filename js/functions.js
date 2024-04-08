/**
 * Funzione per aggiungere gli eventi ai bottoni
 * @param {Array} arr l'array 
 * @param {number} len la lunghezza dell'array
 */
/* function addEvent(arr, len){
    console.log(arr[0].innerHTML)
    for(let i = 0; i < len; i++){
        let numInside = arr[i].innerHTML;
        console.log(numInside);
        arr[i].addEventListener("click", writeOnDisplay(numInside));
    }
} */
function addEvNum(arr, lun){
    for(let i = 0; i < lun; i++){
        arr[i].addEventListener("click", writeOnDisplay);
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
}

/**
 * Funzione che con array di operatori permette di aggiungere l'evento a tutti
 * @date 4/8/2024 - 4:39:37 PM
 *
 * @param {Array} arr
 * @param {number} lun
 */
function addEvOp(arr, lun){
    for(let i = 0; i < lun; i++){
        arr[i].addEventListener("click", operationPoints);
    }
}

function operationPoints(){
    let onDisplay = document.getElementById('dis_op');
    console.log(onDisplay);
    let opSelected = this.innerHTML;
    console.log(opSelected);
    let firstOp = "";
    let opSel = "";
    if(opSelected === '+') {
        opSel = '+';
        firstOp = onDisplay.innerHTML;
        onDisplay.innerHTML = "0";
    } else if(opSelected === '-') {
        opSel = '-';
        firstOp = onDisplay.innerHTML;
        onDisplay.innerHTML = "0";
    } else if(opSelected === '*') {
        opSel = '*';
        firstOp = onDisplay.innerHTML;
        onDisplay.innerHTML = "0";
    } else {
        opSel = '/';
        firstOp = onDisplay.innerHTML;
        onDisplay.innerHTML = "0";
    }return opSel, firstOp;
}