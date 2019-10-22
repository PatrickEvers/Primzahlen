var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');

const ul = document.getElementById('primzahlen');

var numbers = [];
for(var i = 1; i <= 100; i++){
    numbers.push(i);
}

var prime = [2];

for(var i = 2; i < 100; i++){
    if(test(i)){
        prime.push(i);
    }
}

document.getElementById('startBtn').addEventListener('click', () => {
    for(var i=0;i<prime.length;i++){
            printNumber(prime[i]);
    }
})

function printNumber(number){
    var li = document.createElement("li");
    li.id = "list-item";
    li.appendChild(document.createTextNode(number));
    ul.appendChild(li);
}

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
var list = [];
document.getElementById('saveBtn').addEventListener('click', () => {
    const listItems = document.querySelectorAll('#primzahlen li');
    for (let i = 0; i < listItems.length; i++) {
        list.push(listItems[i].textContent);
    }
    dialog.showSaveDialog((fileName) => {
        if (fileName === undefined){
            console.log("Die Datei wurde nicht gespeichert");
            return;
        }
 
        fs.writeFile(fileName, list, (err) => {
            if(err){
                alert("Beim Speichern ist ein Fehler aufgetreten "+ err.message)
            }
                        
            alert("Die Datei wurde erfolgreich gespeichert!");
            list = [];
        });
    });
})
