### MILESTONE 1
aggiungere event listener a tutti i numeri (0-9)
quando si clicca su un numero, concatenarlo al numero visualizzato in alto
### MILESTONE 2
aggiungere event listener a tutti gli operatori
quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
### MILESTONE 3
aggiungere event listener al pulsante =
quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
### MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo 

### Procedimento logico di scomposizione del problema :

-  <i> Prima Milestone</i> : 
    - Avrò sicuramente bisogno di un addEventListener() ad ogni pulsante numerico della calcolatrice, utilizzo quindi la funzione *<b>addEventToNumBtns(numsArray)</b>* [passo in questa funzione l'array di bottoni Numerici]
        - Apro un ciclo ed aggiungo un EventListener ad ogni pulsante, finché non raggiungo l'ultimo pulsante della calcolatrice
    - Quando si <b>clicka</b> sul numero, voglio visualizzarlo sul *display usando la funzione <b>insertToDisplay()</b>* :
        - Devo controllare in che fase dei calcoli sono :
            ##### Se sono nelle fasi iniziali (Fase 0 o Fase 1) ALLORA :
            - Vado quindi ad aggiungere il numero sul display sovrascrivendo il valore sul display
            - controllo SE : il valore nel display è 0 allora, posso tranquillamente sostituirlo con il valore immesso dal tastierino
            - Altrimenti : se il valore è diverso da 0 allora concateno i valori
            - In entrambi i casi salvo il valore nel primo operatore, *aggiornandolo* mano mano che si aggiungono numeri sul <b>display</b>
            ##### Altrimenti se sono nella fase due (quindi al secondo operatore, pre risultato) ALLORA :
            - Vado quindi ad aggiungere il numero sul display sovrascrivendo il valore sul display
            - controllo SE : il valore nel display è 0 allora, posso tranquillamente sostituirlo con il valore immesso dal tastierino
            - Altrimenti : se il valore è diverso da 0 allora concateno i valori
            - In entrambi i casi salvo il valore nel secondo operatore, *aggiornandolo* mano mano che si aggiungono numeri sul <b>display</b>

- <i> Seconda Milestone </i> :
    - Avrò anche in questo caso bisogno di aggiungere .addEventListener() ad ogni pulsante operatore della calcolatrice, uso quindi la funzione *<b>addEventToOpBtns(opsArray)</b>* [ passo in questa funzione l'array di bottoni con Operatore]
    - All'interno della funzione faccio partire un ciclo, che aggiunge l'evento al click <b>Finché</b> non raggiungo la lunghezza massima del array di *Operatori*
        - Una volta selezionato l'operatore quest'ultimo viene immagazzinato nella variabile globale <b>operatore</b>, e mi azzera il display della calcolatrice
        - Mi porta il mio counter interno alla fase 2, impostandogli quindi il secondo valore, cosicché quando vado a clickare nella calcolatrice io già sto operando per il secondo operando.

- <i> Terza Milestone </i> :
    - In questo caso essendo un bottone singolo, prendo il bottone e aggiungo l'EventListener(), al click farà partire la funzione *<b>result()</b>* :
        - Questa funzione cosa fa?
        - Prende dalle variabili globali che hanno salvato al loro interno, <b> il Primo Operatore, il Secondo Operatore e l'operatore </b>
        - Tramite l'utilizzo dello <b>switch</b> ottengo le varie casistiche :
            1. L'operatore '+' --> E si fa la *somma*
            2. L'operatore '-' --> E si fa la *differenza*
            3. L'operatore '*' --> E si fa la *moltiplicazione*
            4. L'operatore '/' --> E si fa la *divisione*
        - Il risultato calcolato nelle casistiche va scritto nel Display
        - Azzero poi tutte le variabili

- <i> Quarta Milestone </i> :
    - In questo caso prendo il bottone singolo del canc, aggiungo l'EventListener() al click farà partire la funzione *<b>clearDisplay()</b>* :
        - Rinizializza tutte le variabili
        - Riporta il display al valore '0'

- <i> Bonus </i> :
    - Verifica che non si divide per 0
    - nella *terza milestone* applico il controllo all'operatore '/'
    - restituisco IMPOSSIBILE sul display della Calcolatrice