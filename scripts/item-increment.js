document.getElementById("tv-plus").addEventListener('click',function(){
    const targetTv = getInputElement("item-tv");
    const newValue = changeItemNumber(targetTv);
    target.value = newValue;
    const targetSubtotal = getInput();
});

document.getElementById("tv-stand-plus").addEventListener('click',function(){
    const target = getInputElement("item-tv-stand");
    const newValue = changeItemNumber(target);
    target.value = newValue;
});