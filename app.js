const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const btnCheck = document.querySelector("#btn-check");
const numberOfNotes = document.querySelectorAll(".number-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

btnCheck.addEventListener("click", getBillAmountAndCashGiven)

function getBillAmountAndCashGiven() {
    if(billAmount.value){
        if (billAmount.value > 0) {
            if(cashGiven.value>0){
                if (cashGiven.value >= billAmount.value) {
                    let cashToBeReturned = cashGiven.value - billAmount.value;
                    calculateNotes(cashToBeReturned);
                } else {
                    alert("Do you wanna wash some plates!!??")
                }
            }else{
                alert("please enter the cash to be given!")
            }
        } else {
            alert("invalid Bill Amount!")
        }
    }else{
        alert("please enter Bill Amount")
    }
}

function calculateNotes(cashToBeReturned){
    for(let i=0; i<notes.length; i++){ 
        let noOfNotes = Math.trunc(cashToBeReturned / notes[i]);
        cashToBeReturned = cashToBeReturned % notes[i];
        numberOfNotes[i].innerText = noOfNotes;
    }
}
