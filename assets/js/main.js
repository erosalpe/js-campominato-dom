const grigliaHtml = document.getElementById("griglia");
const buttonGioca = document.getElementById("gioca");
const difficultyChoose = document.getElementById("difficulty");
var r = document.querySelector(':root');
const punteggioSessione = document.getElementById("punteggio");

let arrayBombe = [];
let randomNum
let caselleCliccate = 0;
let bombeVicine = 0;

//creazione overlay in caso di sconfitta
const overlaySconfitta = document.createElement("div");
overlaySconfitta.classList.add("overlay");
const testoSconfitta = document.createElement("h2");
testoSconfitta.classList.add("testoSconfitta");
overlaySconfitta.appendChild(testoSconfitta);

//creazione overlay in caso di sconfitta
const overlayVittoria = document.createElement("div");
overlayVittoria.classList.add("overlay");
const testoVittoria = document.createElement("h2");
testoVittoria.classList.add("testoVittoria");
overlayVittoria.appendChild(testoVittoria);

//Bottone Gioca
buttonGioca.addEventListener( "click", function(){
    grigliaHtml.innerHTML = "";

    //se la difficoltà è la numero 1
    if (difficultyChoose.value === "difficoltà1"){
        r.style.setProperty('--columns', '10');
        arrayBombe = [];
        caselleCliccate = 0;

        //campoMinato(100, 84);

        
        //Crea array con 16 numeri casuali compresi tra 1 e 100
        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 100) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
            console.log(arrayBombe);
        }
        
        //Ciclo che genera i box e si occupa di verificare se sono bombe o meno
        for (let i = 1; i <= 100; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `<span class="d-none">${i}</span>`;

            box.addEventListener( "click", function(){

                if(arrayBombe.includes(i)){
                    testoSconfitta.innerHTML = `<p>Hai perso<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("red");
                    grigliaHtml.append(overlaySconfitta);
                    punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate; 
                } else if (caselleCliccate === 84){
                    testoVittoria.innerHTML = `<p>Hai vinto<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("blue");
                    grigliaHtml.append(overlayVittoria);
                    punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate;
                } else {

                    //if per evitare che le caselle diventate azzurre possano essere ripremute all'infinito per vincere
                    if (this.classList.contains("blue") === false){
                    this.classList.toggle("blue");
                    caselleCliccate++;
                    console.log("punti:", caselleCliccate);
                    bombeVicine = 0;
                    
                    //Tutti i numeri eccetto i bordi
                    if(i % 10 != 0 && i > 10 && i < 91 && (i-1) % 10 !== 0){
                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }
    
                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }
    
                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }
    
                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }
    
                        if(arrayBombe.includes(i-11) == true){
                            bombeVicine ++;
                            console.log("sopra a sinistra")
                        }
    
                        if(arrayBombe.includes(i+11) == true){
                            bombeVicine ++;
                            console.log("sotto a destra")
                        }
    
                        if(arrayBombe.includes(i-9) == true){
                            bombeVicine ++;
                            console.log("sopra a destra")
                        }
    
                        if(arrayBombe.includes(i+9) == true){
                            bombeVicine ++;
                            console.log("sotto a sinistra")
                        }
                    //Colonna di destra (deve avere 5 condizioni)
                    } else if (i % 10 == 0){
                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }

                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }

                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }

                        if(arrayBombe.includes(i-11) == true){
                            bombeVicine ++;
                            console.log("sopra a sinistra")
                        }

                        if(arrayBombe.includes(i+9) == true){
                            bombeVicine ++;
                            console.log("sotto a destra")
                        }
                    
                    //Ultima Riga Bassa (deve avere 5 condizioni)
                    } else if (i > 91 && i < 100){
                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }

                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }

                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }

                        if(arrayBombe.includes(i-11) == true){
                            bombeVicine ++;
                            console.log("sopra a sinistra")
                        }

                        if(arrayBombe.includes(i-9) == true){
                            bombeVicine ++;
                            console.log("sopra a destra")
                        }

                    //Colonna di sinistra (deve avere 5 condizioni)
                    } else if ((i-1) % 10 == 0){
                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }

                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }

                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }

                        if(arrayBombe.includes(i-9) == true){
                            bombeVicine ++;
                            console.log("sopra a destra")
                        }

                        if(arrayBombe.includes(i+11) == true){
                            bombeVicine ++;
                            console.log("sotto a destra")
                        }
                    
                    //Prima Riga Alta (deve avere 5 condizioni)
                    } else if (i < 10 || i > 1){
                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }

                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }

                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }

                        if(arrayBombe.includes(i+11) == true){
                            bombeVicine ++;
                            console.log("sotto a destra")
                        }

                        if(arrayBombe.includes(i+9) == true){
                            bombeVicine ++;
                            console.log("sotto a sinistra")
                        }

                    }
                    

                    this.innerHTML = `<span>${bombeVicine}</span>`
                    
                }
                }
            })

            grigliaHtml.append(box);
        }
        

    //se la difficoltà è la numero 2
    } else if (difficultyChoose.value === "difficoltà2"){
        r.style.setProperty('--columns', '9');
        arrayBombe = [];
        caselleCliccate = 0;

        //campoMinato(81, 65);

        //Crea array con 16 numeri casuali compresi tra 1 e 81
        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 81) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        
        //Ciclo che genera i box e si occupa di verificare se sono bombe o meno
        for (let i = 1; i <= 81; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `<span class="d-none">${i}</span>`;

            box.addEventListener( "click", function(){
                if(arrayBombe.includes(i)){
                    testoSconfitta.innerHTML = `<p>Hai perso<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("red");
                    grigliaHtml.append(overlaySconfitta);
                    punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate;
                } else if (caselleCliccate === 65){
                    testoVittoria.innerHTML = `<p>Hai vinto<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("blue");
                    grigliaHtml.append(overlayVittoria);
                    punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate;
                } else {

                    //if per evitare che le caselle diventate azzurre possano essere ripremute all'infinito per vincere
                    if (this.classList.contains("blue") === false){
                        this.classList.toggle("blue");
                        caselleCliccate++;
                        console.log("punti:", caselleCliccate);
                        bombeVicine = 0;
                        
                        //Tutti i numeri eccetto i bordi
                        if(i % 9 != 0 && i > 9 && i < 73 && (i-1) % 9 !== 0){
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
        
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
        
                            if(arrayBombe.includes(i-9) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
        
                            if(arrayBombe.includes(i+9) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
        
                            if(arrayBombe.includes(i-10) == true){
                                bombeVicine ++;
                                console.log("sopra a sinistra")
                            }
        
                            if(arrayBombe.includes(i+10) == true){
                                bombeVicine ++;
                                console.log("sotto a destra")
                            }
        
                            if(arrayBombe.includes(i-8) == true){
                                bombeVicine ++;
                                console.log("sopra a destra")
                            }
        
                            if(arrayBombe.includes(i+8) == true){
                                bombeVicine ++;
                                console.log("sotto a sinistra")
                            }
                        //Colonna di destra (deve avere 5 condizioni)
                        } else if (i % 9 == 0){
                            if(arrayBombe.includes(i+9) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
    
                            if(arrayBombe.includes(i-9) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
    
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
    
                            if(arrayBombe.includes(i-10) == true){
                                bombeVicine ++;
                                console.log("sopra a sinistra")
                            }
    
                            if(arrayBombe.includes(i+8) == true){
                                bombeVicine ++;
                                console.log("sotto a destra")
                            }
                        
                        //Ultima Riga Bassa eccetto 73 e 81(deve avere 5 condizioni)
                        } else if (i > 73 && i < 81){
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
    
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
    
                            if(arrayBombe.includes(i-9) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
    
                            if(arrayBombe.includes(i-10) == true){
                                bombeVicine ++;
                                console.log("sopra a sinistra")
                            }
    
                            if(arrayBombe.includes(i-8) == true){
                                bombeVicine ++;
                                console.log("sopra a destra")
                            }
    
                        //Colonna di sinistra (deve avere 5 condizioni)
                        } else if ((i-1) % 9 == 0){
                            if(arrayBombe.includes(i-9) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
    
                            if(arrayBombe.includes(i+9) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
    
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
    
                            if(arrayBombe.includes(i-8) == true){
                                bombeVicine ++;
                                console.log("sopra a destra")
                            }
    
                            if(arrayBombe.includes(i+10) == true){
                                bombeVicine ++;
                                console.log("sotto a destra")
                            }
                        
                        //Prima Riga Alta eccetto 1 e 10(deve avere 5 condizioni)
                        } else if (i < 10 || i > 1){
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
    
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
    
                            if(arrayBombe.includes(i+9) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
    
                            if(arrayBombe.includes(i+10) == true){
                                bombeVicine ++;
                                console.log("sotto a destra")
                            }
    
                            if(arrayBombe.includes(i+8) == true){
                                bombeVicine ++;
                                console.log("sotto a sinistra")
                            }
    
                        }
                        
    
                        this.innerHTML = `<span>${bombeVicine}</span>`
                        
                    }
                }
            })

            grigliaHtml.append(box);
        }

    //se la difficoltà è la numero 3
    } else if (difficultyChoose.value === "difficoltà3"){
        r.style.setProperty('--columns', '7');
        arrayBombe = [];
        caselleCliccate = 0;

        //campoMinato(49, 32);

        //Crea array con 16 numeri casuali compresi tra 1 e 49
        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 49) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        
        //Ciclo che genera i box e si occupa di verificare se sono bombe o meno
        for (let i = 1; i <= 49; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `<span class="d-none">${i}</span>`;
            bombeVicine = 0;

            box.addEventListener( "click", function(){
                if(arrayBombe.includes(i)){
                    testoSconfitta.innerHTML = `<p>Hai perso<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("red");
                    grigliaHtml.append(overlaySconfitta);
                    punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate;
                } else if (caselleCliccate === 32){
                    testoVittoria.innerHTML = `<p>Hai vinto<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("blue");
                    grigliaHtml.append(overlayVittoria);
                    punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate;
                } else {

                    //if per evitare che le caselle diventate azzurre possano essere ripremute all'infinito per vincere
                    if (this.classList.contains("blue") === false){
                        this.classList.toggle("blue");
                        caselleCliccate++;
                        console.log("punti:", caselleCliccate);
                        bombeVicine = 0;
                        
                        //Tutti i numeri eccetto i bordi
                        if(i % 7 != 0 && i > 7 && i < 43 && (i-1) % 7 !== 0){
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
        
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
        
                            if(arrayBombe.includes(i-7) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
        
                            if(arrayBombe.includes(i+7) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
        
                            if(arrayBombe.includes(i-8) == true){
                                bombeVicine ++;
                                console.log("sopra a sinistra")
                            }
        
                            if(arrayBombe.includes(i+8) == true){
                                bombeVicine ++;
                                console.log("sotto a destra")
                            }
        
                            if(arrayBombe.includes(i-6) == true){
                                bombeVicine ++;
                                console.log("sopra a destra")
                            }
        
                            if(arrayBombe.includes(i+6) == true){
                                bombeVicine ++;
                                console.log("sotto a sinistra")
                            }
                        //Colonna di destra (deve avere 5 condizioni)
                        } else if (i % 7 == 0){
                            if(arrayBombe.includes(i+7) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
    
                            if(arrayBombe.includes(i-7) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
    
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
    
                            if(arrayBombe.includes(i-8) == true){
                                bombeVicine ++;
                                console.log("sopra a sinistra")
                            }
    
                            if(arrayBombe.includes(i+6) == true){
                                bombeVicine ++;
                                console.log("sotto a sinistra")
                            }
                        
                        //Ultima Riga Bassa eccetto 43 e 49(deve avere 5 condizioni)
                        } else if (i > 43 && i < 49){
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
    
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
    
                            if(arrayBombe.includes(i-7) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
    
                            if(arrayBombe.includes(i-8) == true){
                                bombeVicine ++;
                                console.log("sopra a sinistra")
                            }
    
                            if(arrayBombe.includes(i-6) == true){
                                bombeVicine ++;
                                console.log("sopra a destra")
                            }
    
                        //Colonna di sinistra (deve avere 5 condizioni)
                        } else if ((i-1) % 7 == 0){
                            if(arrayBombe.includes(i-7) == true){
                                bombeVicine ++;
                                console.log("sopra")
                            }
    
                            if(arrayBombe.includes(i+7) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
    
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
    
                            if(arrayBombe.includes(i-6) == true){
                                bombeVicine ++;
                                console.log("sopra a destra")
                            }
    
                            if(arrayBombe.includes(i+8) == true){
                                bombeVicine ++;
                                console.log("sotto a destra")
                            }
                        
                        //Prima Riga Alta eccetto 1 e 10(deve avere 5 condizioni)
                        } else if (i < 7 || i > 1){
                            if(arrayBombe.includes(i-1) == true){
                                bombeVicine ++;
                                console.log("sinistra")
                            }
    
                            if(arrayBombe.includes(i+1) == true){
                                bombeVicine ++;
                                console.log("destra")
                            }
    
                            if(arrayBombe.includes(i+7) == true){
                                bombeVicine ++;
                                console.log("sotto")
                            }
    
                            if(arrayBombe.includes(i+8) == true){
                                bombeVicine ++;
                                console.log("sotto a destra")
                            }
    
                            if(arrayBombe.includes(i+6) == true){
                                bombeVicine ++;
                                console.log("sotto a sinistra")
                            }
    
                        }

                        this.innerHTML = `<span>${bombeVicine}</span>`
                    }
                    
                }
            })
        
            grigliaHtml.append(box);
        }
    }
})


/*function campoMinato (nCaselle, nPuntiVittoria){
    for (let i = 0; i < 16; i++){
        do{
           randomNum = Math.floor(Math.random() * nCaselle) + 1;
        } while (arrayBombe.includes(randomNum));
    
        arrayBombe.push(randomNum);
    }
    
    //Ciclo che genera i box e si occupa di verificare se sono bombe o meno
    for (let i = 1; i <= nCaselle; i++){
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `<span class="d-none">${i}</span>`;

        box.addEventListener( "click", function(){
            if(arrayBombe.includes(i)){
                testoSconfitta.innerHTML = `<p>Hai perso<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                this.classList.toggle("red");
                grigliaHtml.append(overlaySconfitta);
                punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate;
            } else if (caselleCliccate === nPuntiVittoria){
                testoVittoria.innerHTML = `<p>Hai vinto<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                this.classList.toggle("blue");
                grigliaHtml.append(overlayVittoria);
                punteggioSessione.innerText = parseInt(punteggioSessione.innerText) + caselleCliccate;
            } else {

                //if per evitare che le caselle diventate azzurre possano essere ripremute all'infinito per vincere
                if (this.classList.contains("blue") === false){
                    this.classList.toggle("blue");
                    caselleCliccate++;
                    console.log("punti:", caselleCliccate);
                    bombeVicine = 0;
                    
                    if(i % 10 != 0 && i > 10 && i < 91 && (i-1) % 10 !== 0){
                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }
    
                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }
    
                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }
    
                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }
    
                        if(arrayBombe.includes(i-11) == true){
                            bombeVicine ++;
                            console.log("sopra a sinistra")
                        }
    
                        if(arrayBombe.includes(i+11) == true){
                            bombeVicine ++;
                            console.log("sotto a destra")
                        }
    
                        if(arrayBombe.includes(i-9) == true){
                            bombeVicine ++;
                            console.log("sopra a destra")
                        }
    
                        if(arrayBombe.includes(i+9) == true){
                            bombeVicine ++;
                            console.log("sotto a sinistra")
                        }
                    } else if (i % 10 == 0){
                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }

                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }

                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }
                    } else if (i > 91 && i < 100){
                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }

                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }

                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }

                        if(arrayBombe.includes(i-11) == true){
                            bombeVicine ++;
                            console.log("sopra a sinistra")
                        }

                        if(arrayBombe.includes(i-9) == true){
                            bombeVicine ++;
                            console.log("sopra a destra")
                        }

                    } else if ((i-1) % 10 == 0){
                        if(arrayBombe.includes(i-10) == true){
                            bombeVicine ++;
                            console.log("sopra")
                        }

                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }

                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }

                        if(arrayBombe.includes(i-9) == true){
                            bombeVicine ++;
                            console.log("sopra a destra")
                        }

                        if(arrayBombe.includes(i+11) == true){
                            bombeVicine ++;
                            console.log("sotto a destra")
                        }
                    } else if (i < 10 || i > 1){
                        if(arrayBombe.includes(i-1) == true){
                            bombeVicine ++;
                            console.log("sinistra")
                        }

                        if(arrayBombe.includes(i+1) == true){
                            bombeVicine ++;
                            console.log("destra")
                        }

                        if(arrayBombe.includes(i+10) == true){
                            bombeVicine ++;
                            console.log("sotto")
                        }

                        if(arrayBombe.includes(i+11) == true){
                            bombeVicine ++;
                            console.log("sotto a destra")
                        }

                        if(arrayBombe.includes(i+9) == true){
                            bombeVicine ++;
                            console.log("sotto a sinistra")
                        }

                    }
                    

                    this.innerHTML = `<span>${bombeVicine}</span>`
                    
                }
                
            }
        })
    
        grigliaHtml.append(box);
    }
}

*/
















  



