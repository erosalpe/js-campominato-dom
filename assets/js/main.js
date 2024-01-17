const grigliaHtml = document.getElementById("griglia");
const buttonGioca = document.getElementById("gioca");
const difficultyChoose = document.getElementById("difficulty");
var r = document.querySelector(':root');

let arrayBombe = [];
let randomNum



buttonGioca.addEventListener( "click", function(){
    grigliaHtml.innerHTML = "";

    if (difficultyChoose.value === "difficoltà1"){
        r.style.setProperty('--columns', '10');
        arrayBombe = []

        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 16) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        

        for (let i = 1; i <= 100; i++){
            let box = document.createElement("div");
            box.classList.add("box");

            box.addEventListener( "click", function(){
                this.classList.toggle("active");
                console.log(`hai cliccato la casella ${i}`)
            })

            box.innerText = i;
        
            grigliaHtml.append(box);
        }

    } else if (difficultyChoose.value === "difficoltà2"){
        r.style.setProperty('--columns', '9');
        arrayBombe = []
        
        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 16) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        

        for (let i = 1; i <= 81; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener( "click", function(){
                this.classList.toggle("active");
                console.log(`hai cliccato la casella ${i}`)
            })

            box.innerText = i;
        
            grigliaHtml.append(box);
        }

    } else if (difficultyChoose.value === "difficoltà3"){
        r.style.setProperty('--columns', '7');
        arrayBombe = []

        for (let i = 0; i < 16; i++){
            do{
               randomNum = Math.floor(Math.random() * 16) + 1;
            } while (arrayBombe.includes(randomNum));
        
            arrayBombe.push(randomNum);
        
            console.log(arrayBombe);
        }
        

        for (let i = 1; i <= 49; i++){
            let box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener( "click", function(){
                this.classList.toggle("active");
                console.log(`hai cliccato la casella ${i}`)
            })

            box.innerText = i;
        
            grigliaHtml.append(box);
        }
    }
})
















  



