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
    var ul = document.getElementById("primzahlen");
    var li = document.createElement("li");
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
