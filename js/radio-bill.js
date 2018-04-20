// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn	= document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var total = document.querySelector(".totalTwo");
var callTotal = document.querySelector(".callTotalTwo");
var smsTotal = document.querySelector(".smsTotalTwo");
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function radioBillTotal(){
    var billItemTypeRadioChecked = document.querySelector("input[name='billItemType']:checked").value;

    if (billItemTypeRadioChecked === 'call') {
        callTotal += 2.75;
    }
    else if (billItemTypeRadioChecked === 'sms') {
        smsTotal += 0.75;
    }

    callTotal.innerHTML = callTotal.toFixed(2);
    smsTotal.innerHTML = callTotal.toFixed(2);
    var totalSum = callTotal + smsTotal;
    total.innerHTML = callTotal.toFixed(2);

    if (totalSum >= 50) {
        total.classList.add('danger');
    }
    else if (totalSum >= 30) {
        total.classList.add('warning');
    }
}

radioBillAddBtn.addEventListener('click', radioBillTotal);
