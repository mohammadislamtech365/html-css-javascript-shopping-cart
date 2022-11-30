document.getElementById("tv-plus").addEventListener('click',function(){
    const itemTv = getElement("item-tv");
    const currentItemNumber = getInputValue(itemTv);
    const newItemNumber=changeInputItem(currentItemNumber,itemTv);
    const tvPriceElement = getElement("tv-price");
    const tvPrice = getElementValue(tvPriceElement);
    findSubTotalPrice(tvPrice,currentItemNumber,newItemNumber,"subtotal");
});

document.getElementById("tv-stand-plus").addEventListener('click',function(){
    const itemTvStand = getElement("item-tv-stand");
    const currentItemNumber = getInputValue(itemTvStand);
    const newItemNumber = changeInputItem(currentItemNumber,itemTvStand);
    const tvStandPriceElement = getElement("tv-stand-price");
    const tvStandPrice = getElementValue(tvStandPriceElement);
    const subTotalElement = getElement("subtotal");
    const subTotalPrice = getElementValue(subTotalElement);
    findSubTotalPrice(tvStandPrice,currentItemNumber,newItemNumber,"subtotal");
});