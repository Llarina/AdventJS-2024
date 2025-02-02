function organizeShoes(shoes) {
    let shoeList = {};
    const pairs=[];

    shoes.forEach(({type,size}) => {
      if(!shoeList[size]){
        shoeList[size]={I:0,R:0}
      }
      shoeList[size][type]++;
      
    });

    for(let i in shoeList){
      let left = shoeList[i]['I'];
      let rigt = shoeList[i]['R'];
      let numPairs = Math.min(left,rigt);

      for(let j=0;j<numPairs;j++){
        pairs.push(parseInt(i));
      }
    }

    return(pairs);

  }
  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]  
console.log(organizeShoes(shoes));