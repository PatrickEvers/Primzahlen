var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');

const ul = document.getElementById('primzahlen');

//Array mit allen Zahlen von 1 bis 100
var numbers = [];
for(var i = 1; i <= 100; i++){
    numbers.push(i);
}

//Array für die Primzahlen
 var prime = [2];

document.getElementById('startBtn').addEventListener('click', () => {
    //Test des numbers Arrays auf Primzahlen.
    //Primzahlen werden in das prime Array geschrieben.
    for(var i = 2; i < 100; i++){
        if(test(i)){
            prime.push(i);
        }
    }
    
    //Ausgabe der Primzahlen in einer Liste.
    for(var i=0;i<prime.length;i++){
            printNumber(prime[i]);
    }
})

//Funktion für das hinzufügen der Primzahlen zur Liste.
function printNumber(number){
    var li = document.createElement("li");
    li.id = "list-item";
    li.appendChild(document.createTextNode(number));
    ul.appendChild(li);
}

//Funktion für das Testen, ob eine Zahl eine Primzahl ist.
function test(number){
    for(var i = 0; i < prime.length; i++){
        if(number % prime[i] !== 0){
            
        }
        else{
            return false;
        }
    }
    return true;
}

//Speichern der Liste in einer Datei
document.getElementById('saveBtn').addEventListener('click', () => {
    //Dialog für das Speichern der Datei.
    dialog.showSaveDialog((fileName) => {
        if (fileName === undefined){
            console.log("Die Datei wurde nicht gespeichert");
            return;
        }
 
        fs.writeFile(fileName, prime, (err) => {
            if(err){
                alert("Beim Speichern ist ein Fehler aufgetreten "+ err.message)
            }
                        
            alert("Die Datei wurde erfolgreich gespeichert!");
        });
    });
})
