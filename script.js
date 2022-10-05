let str = "";
let treeHeight = 4;

const showChristmasTree = (treeHeight) => {
  if (treeHeight === 1 && treeHeight > 10) {
		return ""	
	} 
  
  let x = ""
  for (let i = 0; i <= treeHeight; i++) {
  
    for (let j = i; j <= treeHeight; j++) {
      str += " " 
      x += " "
      
      if (i === 0 && j === (treeHeight -1)) {
        str += "*"
        x += " |" 
      }
    }

    for (let k = 0; k < (2*i)-1; k++) {
      if (k === 0) {
        str += "/"
      }
    
      str+= "x"
    }
    
    if (i === 0) {
      str += "\n"
    } else {
      str += "\\ \n";
    }  
  }
  
  str += x
  console.log(str)

};

showChristmasTree(treeHeight)
