/* 
str.reverse() ==> 
.reverse the string
example
"asd"==>"dsa"

*/
function reverse(str) {
  let reverseStr = "";
  for (let i of str) {
    reverseStr = i + reverseStr;
  }
  return reverseStr;
}
console.log(reverse("asd"));
