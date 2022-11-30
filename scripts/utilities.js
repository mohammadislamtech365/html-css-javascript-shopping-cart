function getElement(id) {
    const target = document.getElementById(id);
    return target;
}

function getInputValue(target){
    const targetValueString = target.value;
    const currentValue = parseInt(targetValueString);
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
// function getElement(id) {
//     const targetString = document.getElementById(id).innerText;
//     const targetValue = parseInt(targetString);
//     return targetValue;
// }

function findTotalPrice(itemNumber,price){
        
}

