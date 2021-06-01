let str = "The Alliance is are enemy ."
let arr = str.split(' ');

console.log(arr);
console.log(arr.splice(2,1));

// [object Array] (6)
["The","Alliance","is","are","enemy","."]
// [object Array] (1)
["is"]
