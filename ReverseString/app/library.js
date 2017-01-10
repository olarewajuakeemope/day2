'use strict'

module.exports = {
 
 reverseString: function(str){
 	if(str==="")
 		return null;
 	var newStr = str.split("").reverse().join("");
 	if(str===newStr)
 		return true;
    return newStr;
  }

}
