function filterStrings(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 3) {
      result.push(arr[i]);
    }
  }
  return result;
}
let arr = ["Hello", "2", "world", ":-)"];
let filteredArr = filterStrings(arr);
console.log(filteredArr); // ["2", ":-)"]
