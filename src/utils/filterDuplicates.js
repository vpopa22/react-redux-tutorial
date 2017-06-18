export const  filterDuplicatesInArray = a => {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    var item;
    for(var i = 0; i < len; i++) {
         item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}

export const filterObjDuplicatesInArray = a => {
  var arrResult = {};
  var i;
  var j = 0;
  var nonDuplicatedArray = [];
  var item

  for (i = 0; i < a.length; i++) {
      item = a[i];
      arrResult[ item.id ] = item;
  }

  for(var item in arrResult) {
      nonDuplicatedArray[j++] = arrResult[item];
  }

  return nonDuplicatedArray;
}
