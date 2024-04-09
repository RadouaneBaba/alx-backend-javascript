export default function appendToEachArrayValue(array, appendString) {
  const myArr = [];
  for (const elem of array) {
    myArr.push(appendString + elem);
  }

  return myArr;
}
