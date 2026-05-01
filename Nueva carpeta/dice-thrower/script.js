document.getElementById("rollBtn").addEventListener("click", function () {
    document.getElementById("diceContainer").innerHTML = "";
    let diceNum = document.getElementById("diceNum").value;
    for (let i = 0; i < diceNum; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        let die = document.createElement("div");
        let sum = 0;
        die.className = "die";
        switch (roll) {
            case 1:
                die.innerHTML = '<img id="diceImage" src="images/dice-one-solid-full.svg" alt="Dice Image">';
                break;
            case 2:
                die.innerHTML = '<img id="diceImage" src="images/dice-two-solid-full.svg" alt="Dice Image">';
                break;
            case 3:
                die.innerHTML = '<img id="diceImage" src="images/dice-three-solid-full.svg" alt="Dice Image">';
                break;
            case 4:
                die.innerHTML = '<img id="diceImage" src="images/dice-four-solid-full.svg" alt="Dice Image">';
                break;
            case 5:
                die.innerHTML = '<img id="diceImage" src="images/dice-five-solid-full.svg" alt="Dice Image">';
                break;
            case 6:
                die.innerHTML = '<img id="diceImage" src="images/dice-six-solid-full.svg" alt="Dice Image">';
                break;
        }
        sum += roll;
        document.getElementById("diceContainer").appendChild(die).innerHTML += `<p>${roll}</p>`;
    }
});
