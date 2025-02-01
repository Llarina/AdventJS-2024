function prepareGifts(gifts) {
    return gifts.filter((gift,index)=>gifts.indexOf(gift)===index).sort((a,b)=>a-b);
}
console.log(prepareGifts([1, 2, 3, 5, 5, 4, 6]));