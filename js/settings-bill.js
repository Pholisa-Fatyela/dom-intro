// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var addBtn = document.querySelector(".add");
var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");
var totalSumElem = document.querySelector(".totalSettings");


//get the setted values.
var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var warningValueElem = document.querySelector(".warningLevelSetting");
var criticalValueElem = document.querySelector(".criticalLevelSetting");
var updateBtnElem = document.querySelector(".updateSettings");

var callCost = 0;
var smsCost = 0;
var warning = 0;
var critical = 0;
var total = 0;

var totalCalls = 0;
var totalSms = 0

function settingsUpdate() {
    callCost = parseFloat(callCostElem.value);
    smsCost = parseFloat(smsCostElem.value);
    warning = parseFloat(warningValueElem.value);
    critical = parseFloat(criticalValueElem.value);

    totalSumElem.classList.remove("warning");
    totalSumElem.classList.remove("danger");

    if (total >= critical) {
        totalSumElem.classList.remove("warning");
        totalSumElem.classList.add("danger");
    } else if (total >= warning) {
        totalSumElem.classList.add("warning");
        totalSumElem.classList.remove("danger");
    }




}

updateBtnElem.addEventListener('click', settingsUpdate)

function calcBillWithSetting() {

    var checkedRadioBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    checkedRadioBtn = checkedRadioBtnElem.value;
    console.log(critical);
    if (checkedRadioBtn === "call" && critical > total) {
        totalCalls += callCost;
        total += callCost
    } else if (checkedRadioBtn = "sms" && critical > total) {
        totalSms += smsCost;
        total += smsCost
    }
    callTotal.innerHTML = totalCalls.toFixed(2);
    console.log(totalCalls.toFixed(2));
    smsTotal.innerHTML = totalSms.toFixed(2);
    var totalSum = totalCalls + totalSms;
    totalSumElem.innerHTML = totalSum.toFixed(2);

    if (totalSum >= critical) {
        // adding the danger class will make the text red
        totalSumElem.classList.add("danger");
    } else if (totalSum >= warning) {
        totalSumElem.classList.add("warning");
    }





}
addBtn.addEventListener('click', calcBillWithSetting)
