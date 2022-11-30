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
    return newValue;
}
function getValue(){
    const targetValueString = target.innerText;
    const targetValue = parseInt(targetValueString);
    return targetValue;
}


function findSubTotalPrice(itemPrice,previousItemNumber,newItemNumber,id){
    const subTotalElement = getElement(id);
    const subTotalPrice = getElementValue(subTotalElement);
    const currentItemstotalPrice = subTotalPrice + (itemPrice * (newItemNumber-previousItemNumber));
    subTotalElement.innerText =  currentItemstotalPrice; 
    return currentItemstotalPrice;
}

