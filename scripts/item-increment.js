document.getElementById("tv-plus").addEventListener('click',function(){
    const itemTv = getElement("item-tv");
    const currentItem = getInputValue(itemTv);
    changeInputItem(currentItem,itemTv);
    const tvPriceElement = getElement("tv-price");
    const tvPrice = getElementValue(tvPriceElement);
    console.log(tvPrice);
});

document.getElementById("tv-stand-plus").addEventListener('click',function(){
    const itemTvStand = getElement("item-tv-stand");
    const currentValue = getInputValue(itemTvStand);
    changeInputItem(currentValue,itemTvStand);
    const tvStandPriceElement = getElement("tv-stand-price");
    const tvStandPrice = getElementValue(tvStandPriceElement);
    console.log(tvStandPrice);
});