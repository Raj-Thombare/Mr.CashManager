const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const btnCheck = document.querySelector("#btn-check");
const btnContinue = document.querySelector("#btn-continue");
const errorMsg = document.querySelector("#error-message");
const cashGivenDiv = document.querySelector(".cash-given-div")
const output = document.querySelector("#output-div")
const numberOfNotes = document.querySelectorAll(".number-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];



function checkBtnHandler() {
    let bill = Number(billAmount.value);
    let cash = Number(cashGiven.value);
    hideError();
    hideTable();
    if (cash > 0) {
        if (cash >= bill) {
            let cashToBeReturned = cash - bill;
            calculateNotes(cashToBeReturned);
        } else {
            errorMessage("Do you wanna wash some Bartans🍽️🍴🥄")
        }
    } else {
        errorMessage("Please enter Cash Amount to be paid!💵")
    }
};

function calculateNotes(cashToBeReturned) {
    for (let i = 0; i < notes.length; i++) {
        let noOfNotes = Math.trunc(cashToBeReturned / notes[i]);
        cashToBeReturned = cashToBeReturned % notes[i];
        numberOfNotes[i].innerText = noOfNotes;
    }
    output.style.display = "block";
}

function continueBtnHandler() {
    hideError();
    if (Number(billAmount.value > 0)) {
        cashGivenDiv.style.display = "block";
        btnContinue.style.display = "none"
    } else {
        errorMessage("Invalid Bill Amount!💵");
    }
}

function errorMessage(text){
    errorMsg.style.display = "block";
    errorMsg.innerText = text;
}

function hideError(){
    errorMsg.style.display = "none";
}
function hideTable() {
    output.style.display = "none";
}

btnContinue.addEventListener("click", continueBtnHandler)
btnCheck.addEventListener("click", checkBtnHandler)