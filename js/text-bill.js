var billTypeText = document.querySelector('.billTypeText');
var callsTotalElem = document.querySelector('.callTotalOne');
var smssTotalElem = document.querySelector('.smsTotalOne');
var totalCostElem = document.querySelector('.totalOne');
var textTotalAddBtn = document.querySelector(".addToBillBtn");

var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smssTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}


textTotalAddBtn.addEventListener('click', textBillTotal);
