let cash = 100,
    car,
    carBetted;

function onload () {
    let divCash = document.getElementById("cash");
    
    divCash.innerHTML = cash;
}

function cashref(){
    const inputBet = document.getElementById("bet")
    const divPot = document.getElementById("divPot")
    const budget = document.getElementById("budget")

    if (inputBet.value > cash) {
        alert('Saldo Insuficiente');
        inputBet.value = cash;
        return;
    } else if (inputBet.value < 0) {
        alert('Quer ganhar sem apostar?');
        inputBet.value = 0;
        return;
    }
  
    divPot.innerHTML = inputBet.value
    budget.innerHTML = cash - inputBet.value
}

function choosed(pilot){
    carBetted = pilot;

    const inputBet = document.getElementById("bet");
    cash = cash - inputBet.value;
}

function start(){

    let input = document.getElementById("bet");

    input.disabled = true;

    var pilot1 = document.getElementById("pilot1");
    var pilot2 = document.getElementById("pilot2");
    var pilot3 = document.getElementById("pilot3");
    var pilot4 = document.getElementById("pilot4");
    var pilot5 = document.getElementById("pilot5");

    let leftMargin1 = 0
      , leftMargin2 = 0
      , leftMargin3 = 0
      , leftMargin4 = 0
      , leftMargin5 = 0
      , rightMargin1 = 100
      , rightMargin2 = 100
      , rightMargin3 = 100
      , rightMargin4 = 100
      , rightMargin5 = 100
      , intervalId;

    function avancar() {
        const betValue = document.getElementById("bet").value;
        console.log(cash)
        console.log(betValue)
        console.log(betValue*2)
     
        leftMargin1 += Math.floor(Math.random() * 5);
        leftMargin2 += Math.floor(Math.random() * 2);
        leftMargin3 += Math.floor(Math.random() * 2);
        leftMargin4 += Math.floor(Math.random() * 2);
        leftMargin5 += Math.floor(Math.random() * 2);
    
        rightMargin1 = rightMargin1 - leftMargin1;
        rightMargin2 = rightMargin2 - leftMargin2;
        rightMargin3 = rightMargin3 - leftMargin3;
        rightMargin4 = rightMargin4 - leftMargin4;
        rightMargin5 = rightMargin5 - leftMargin5;
    
        pilot1.style.margin = "0px " + rightMargin1 + "% 0px " + leftMargin1 + "%";
        pilot2.style.margin = "0px " + rightMargin2 + "% 0px " + leftMargin2 + "%";
        pilot3.style.margin = "0px " + rightMargin3 + "% 0px " + leftMargin3 + "%";
        pilot4.style.margin = "0px " + rightMargin4 + "% 0px " + leftMargin4 + "%";
        pilot5.style.margin = "0px " + rightMargin5 + "% 0px " + leftMargin5 + "%";
        
        if (leftMargin1 >= 100) {
            if (carBetted == 'pilot1') {
                cash = cash + (betValue*2);
                alert("Seu piloto 1 ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }
            clearInterval(intervalId);
            input.disabled = false;
        }
        if (leftMargin2 >= 100) {
            if (carBetted == 'pilot2') {
                cash = cash + (betValue*2);
                alert("Seu piloto 2 ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }
            clearInterval(intervalId);
            input.disabled = false;
        }
        if (leftMargin3 >= 100) {
            if (carBetted == 'pilot3') {
                cash = cash + (betValue*2);
                alert("Seu piloto 3 ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }
            if (cash == 0) {
                alert("Game over!")
                window.reset()
            }
            clearInterval(intervalId);
            input.disabled = false;
        }
        if (leftMargin4 >= 100) {
            if (carBetted == 'pilot4') {
                cash = cash + (betValue*2);
                alert("Seu piloto 4 ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }
            clearInterval(intervalId);
            input.disabled = false;
        }
        if (leftMargin5 >= 100) {
            if (carBetted == 'pilot5') {
                cash = cash + (betValue*2);
                alert("Seu piloto 5 ganhou, você agora tem:" + cash);
            } else {
                alert("Perdeu :(");
            }
            clearInterval(intervalId);
            input.disabled = false;
        }
    }

    intervalId = setInterval(avancar, 50);
};

function reset() {
    var pilot1 = document.getElementById("pilot1");
    var pilot2 = document.getElementById("pilot2");
    var pilot3 = document.getElementById("pilot3");
    var pilot4 = document.getElementById("pilot4");
    var pilot5 = document.getElementById("pilot5");

    pilot1.style.margin = "0px 0px 0px 0px";
    pilot2.style.margin = "0px 0px 0px 0px";
    pilot3.style.margin = "0px 0px 0px 0px";
    pilot4.style.margin = "0px 0px 0px 0px";
    pilot5.style.margin = "0px 0px 0px 0px";
};