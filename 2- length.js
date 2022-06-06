/* 
str.length ==> give the length of string
example
asd.length  ==>3

*/
function length(str) {
  let length = 0;
  for (let i = 0; i < 100000000; i++) {
    if (!str[i]) {
      break;
    }
    length++;
  }
  return length;
}

console.log(length("ahmed hassan"));
