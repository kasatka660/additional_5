 module.exports = function check(str, bracketsConfig) {
  var array = [];
	for (i = 0; i < str.length; i++) {
    var bracket = str[i];
    var open = false;
    for (j = 0; j < bracketsConfig.length; j++) {
      if (bracket == bracketsConfig[j][0]) {
        if (bracketsConfig[j][0] == bracketsConfig[j][1]
          && bracketsConfig[j][0] == array[array.length - 1]) { 
          array.pop();
          open = true;
          break;
        }
        open = true;
        array.push(bracket);
      }
    }
    if (open == false) {
      if (array.length == 0) {
        return false;
      }
      lastBracket = array.pop();
      for (k = 0; k < bracketsConfig.length; k++) {
        if ((lastBracket == bracketsConfig[k][0]) && (bracket != bracketsConfig[k][1])) {
          return false;
        }
      }      
    }
  } 
  if (array.length == 0) {
    return true;
  } else {
    return false;
  }

}
