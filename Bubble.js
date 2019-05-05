var array ["day", "cat", "ant", "aant", "aaant"];
var empty;


function sort(array){
  for(var i = 0; i<array.length; i++){
    for(var j = 0; j<array.length; j++){
      if(array[i]<array[j] && i!=j){
        temp = array[i];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array
}
