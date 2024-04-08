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
function addEv(arr, lun){
    for(let i = 0; i < lun; i++){
        arr[i].addEventListener("click", writeOnDisplay);
    }
}


function writeOnDisplay (){
    const displayCalc = document.getElementById('op').innerHTML;
    console.log(displayCalc);
    const numInside = this.innerHTML;
    console.log(numInside);
    if(displayCalc === 0){
        displayCalc = numInside;
    }
}