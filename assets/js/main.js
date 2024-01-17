const grigliaHtml = document.getElementById("griglia");
const buttonGioca = document.getElementById("gioca");
const difficultyChoose = document.getElementById("difficulty");
var r = document.querySelector(':root');

let arrayBombe = [];
let randomNum
let caselleCliccate = 0;

const overlaySconfitta = document.createElement("div");
overlaySconfitta.classList.add("overlay");
const testoSconfitta = document.createElement("h2");
testoSconfitta.classList.add("testoSconfitta");
overlaySconfitta.appendChild(testoSconfitta);


const overlayVittoria = document.createElement("div");
overlayVittoria.classList.add("overlay");
const testoVittoria = document.createElement("h2");
testoVittoria.classList.add("testoVittoria");
overlayVittoria.appendChild(testoVittoria);












buttonGioca.addEventListener( "click", function(){
    grigliaHtml.innerHTML = "";

    if (difficultyChoose.value === "difficoltà1"){
        r.style.setProperty('--columns', '10');
        arrayBombe = [];
        caselleCliccate = 0;

        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 100) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        

        for (let i = 1; i <= 100; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `<span>${i}</span>`;

            box.addEventListener( "click", function(){

                if(arrayBombe.includes(i)){
                    testoSconfitta.innerHTML = `<p>Hai perso<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("red");
                    grigliaHtml.append(overlaySconfitta); 
                } else if (caselleCliccate === 84){
                    testoVittoria.innerHTML = `<p>Hai vinto<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("blue");
                    grigliaHtml.append(overlayVittoria); 
                } else {
                    this.classList.toggle("blue");
                    caselleCliccate++;
                    console.log(caselleCliccate);
                }
            })

            grigliaHtml.append(box);
        }

    } else if (difficultyChoose.value === "difficoltà2"){
        r.style.setProperty('--columns', '9');
        arrayBombe = [];
        caselleCliccate = 0;
        
        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 81) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        

        for (let i = 1; i <= 81; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `<span>${i}</span>`;

            box.addEventListener( "click", function(){
                if(arrayBombe.includes(i)){
                    testoSconfitta.innerHTML = `<p>Hai perso<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("red");
                    grigliaHtml.append(overlaySconfitta); 
                } else if (caselleCliccate === 65){
                    testoVittoria.innerHTML = `<p>Hai vinto<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("blue");
                    grigliaHtml.append(overlayVittoria); 
                } else {
                    this.classList.toggle("blue");
                    caselleCliccate++;
                    console.log(caselleCliccate);
                }
            })

            grigliaHtml.append(box);
        }

    } else if (difficultyChoose.value === "difficoltà3"){
        r.style.setProperty('--columns', '7');
        arrayBombe = [];
        caselleCliccate = 0;

        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 49) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        

        for (let i = 1; i <= 49; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `<span>${i}</span>`;

            box.addEventListener( "click", function(){
                if(arrayBombe.includes(i)){
                    testoSconfitta.innerHTML = `<p>Hai perso<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("red");
                    grigliaHtml.append(overlaySconfitta); 
                } else if (caselleCliccate === 32){
                    testoVittoria.innerHTML = `<p>Hai vinto<br><br>Hai fatto ${caselleCliccate} punti</p>`;
                    this.classList.toggle("blue");
                    grigliaHtml.append(overlayVittoria); 
                } else {
                    this.classList.toggle("blue");
                    caselleCliccate++;
                    console.log(caselleCliccate);
                }
            })
        
            grigliaHtml.append(box);
        }
    }
})
















  



