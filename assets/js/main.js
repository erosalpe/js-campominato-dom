const grigliaHtml = document.getElementById("griglia");
const buttonGioca = document.getElementById("gioca");
const difficultyChoose = document.getElementById("difficulty");
var r = document.querySelector(':root');
const punteggioSessione = document.getElementById("punteggio");

let arrayBombe = [];
let randomNum
let caselleCliccate = 0;

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
            box.innerHTML = `<span>${i}</span>`;

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
            box.innerHTML = `<span>${i}</span>`;

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
            box.innerHTML = `<span>${i}</span>`;

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
                    }
                    
                }
            })
        
            grigliaHtml.append(box);
        }
    }
})
















  



