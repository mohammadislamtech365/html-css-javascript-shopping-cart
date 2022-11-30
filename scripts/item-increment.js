document.getElementById("tv-plus").addEventListener('click',function(){
    const itemTv = getElement("item-tv");
    const currentValue = getInputValue(itemTv);
    changeInputItem(currentValue,itemTv);
});

document.getElementById("tv-stand-plus").addEventListener('click',function(){
    const itemTvStand = getElement("item-tv-stand");
    const currentValue = getInputValue(itemTvStand);
    changeInputItem(currentValue,itemTvStand);
});