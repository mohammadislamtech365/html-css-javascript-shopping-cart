function getElement(id) {
    const target = document.getElementById(id);
    return target;
}

function getInputValue(target){
    const targetValueString = target.value;
    const currentValue = parseFloat(targetValueString);
    return currentValue;
}

function getElementValue (target){
    const targetValueString = target.innerText;
    const currentValue = parseFloat(targetValueString);
    return currentValue;
}
function changeInputItem(previousValue,target) {
    const newValue = previousValue + 1;
    target.value = newValue;

}
function getValue(){
    const targetValueString = target.innerText;
    const targetValue = parseInt(targetValueString);
    return targetValue;
}


function findTotalPrice(itemNumber,price){
        
}

