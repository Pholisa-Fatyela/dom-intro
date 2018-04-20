var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn	= document.querySelector(".radioBillAddBtn");
var total = document.querySelector(".totalTwo");
var callsTot = document.querySelector(".callTotalTwo");
var smsTot = document.querySelector(".smsTotalTwo");

var callTotal = 0;
var smsTotal = 0;
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

    callsTot.innerHTML = callTotal.toFixed(2);
    smsTot.innerHTML = smsTotal.toFixed(2);
    var totalSum = callTotal + smsTotal;
    total.innerHTML = totalSum.toFixed(2);

    if (totalSum >= 50) {
        total.classList.add('danger');
    }
    else if (totalSum >= 30) {
        total.classList.add('warning');
    }
}

radioBillAddBtn.addEventListener('click', radioBillTotal);
