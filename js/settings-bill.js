var checkedRadioBtn = document.querySelector(".billItemTypewithSettings");

var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");

var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var totalSumElem = document.querySelector(".totalSettings");

var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");

var calculateAddSettingsBtn = document.querySelector(".addSettingsBtn");
var updateBtnElem = document.querySelector(".updateSettings");

var callCost = 0;
var smsCost = 0;
var warning = 0;
var critical = 0;

var totalBill = 0;
var totalCalls = 0;
var totalSmes = 0;

function settingsUpdate() {
    callCost = parseFloat(callCostElem.value);
    smsCost = parseFloat(smsCostElem.value);
    warning = parseFloat(warningLevel.value);
    critical = parseFloat(criticalLevel.value);

    totalSumElem.classList.remove("warning");
    totalSumElem.classList.remove("danger");

    if(totalBill >= critical) {
        totalSumElem.classList.remove("warning");
        totalSumElem.classList.add("danger");
    } else if(totalBill >= warning) {
        totalSumElem.classList.add("warning");
        totalSumElem.classList.remove("danger");
    }
}

updateBtnElem.addEventListener('click', settingsUpdate);

function calculateBillWithSetting() {

    if(totalBill < critical){
        var checkedRadioBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        if (checkedRadioBtnElem){
            var checkedRadioBtn = checkedRadioBtnElem.value;

            if (checkedRadioBtn === "call") {
                totalCalls += callCost;
            } else if (checkedRadioBtn = "sms") {
                totalSmes += smsCost;
            }

            callTotal.innerHTML = totalCalls.toFixed(2);
            smsTotal.innerHTML = totalSmes.toFixed(2);
            totalBill = totalCalls + totalSmes;
            totalSumElem.innerHTML = totalBill.toFixed(2);
        }

        if (totalBill >= critical) {
            totalSumElem.classList.add("danger");
        } else if (totalBill >= warning) {
            totalSumElem.classList.add("warning");
        }
    }
}
calculateAddSettingsBtn.addEventListener('click', calculateBillWithSetting);
