function inBox(box){
    for(let i in box){
        const row = box[i];
        const present=row.indexOf('*');
        if(present>0&&i!=0&&i!=box.length-1 && present<row.length-1 &&row[0]==='#'&& row[row.length-1]==='#'){
          return true;
        } 
    }
    return false;
}
console.log(inBox([
    "#*#",
    "# #",
    "###"
]));