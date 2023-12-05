const extendHex = (shortHex) => {
  let ans="";
  for (let index = 0; index < shortHex.length; index++) {
	  if(index==0){
		  continue
	  }
  	ans+=shortHex.charAt(index)+shortHex.charAt(index)
  }	
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
