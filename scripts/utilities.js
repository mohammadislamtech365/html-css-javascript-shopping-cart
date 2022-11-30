function getInputElement(id) {
    const target = document.getElementById(id);
    return target;
}

function changeItemNumber(target) {
    const targetValueString = target.value;
    const previousValue = parseInt(targetValueString);
    const newValue = previousValue + 1;
    return newValue;
}
function getElement(id) {
    const targetString = document.getElementById(id).innerText;
    const targetValue = parseInt(targetString);
    return targetValue;
}

function findTotalPrice(itemNumber,price){
        
}

