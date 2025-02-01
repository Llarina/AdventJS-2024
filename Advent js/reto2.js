let max;
let returnable;
function createFrame(names) {
    max=0;
    returnable="";
    for(let asterisco of names){
        if(max<asterisco.length){
            max=asterisco.length;
        }
    }
    for(let i=0;i<(max)+4;i++){
        returnable+="*";
    }
    for(let element of names){
        returnable+="\n* "+element;
        for(let i=0;i<((max+1)-element.length);i++){
            returnable+=" ";
        }
        returnable+="*";
    }
    returnable+="\n";
    for(let i=0;i<(max)+4;i++){
        returnable+="*";
    }
    return returnable;
  }
console.log(createFrame(["Llarina","Denis","Mía"]));