let str = "";
let treeHeight = 8;

const showChristmasTree = (treeHeight) => {
  for (let i = 0; i <= treeHeight ; i++) {
  
    for (let j = i; j <= treeHeight; j++) {
     str += " "
    }

    for( let k = 0; k < (2*i)-1; k++) {
     str+= "x"
    }
    
    str += "\n"
	}
   console.log(str)
};

showChristmasTree(treeHeight)
