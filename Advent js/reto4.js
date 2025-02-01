function createXmasTree(height, ornament) {
    let tronco='';
    let espacios='';
    let espaciosTronco='';
    let newornament=ornament;
    let maxWidth=height*2-1;
    let tree = '';
    for(let i=0;i<height;i++){
        newornament=ornament.repeat(2*i+1);
        espacios='_'.repeat((maxWidth-(2*i+1))/2);
        tree+=espacios+newornament+espacios+'\n';
    }
    espaciosTronco='_'.repeat((maxWidth-1)/2);
    tronco+=espaciosTronco+'#'+espaciosTronco;

    return tree+tronco+'\n'+tronco;
}

console.log(createXmasTree(4,'*'));