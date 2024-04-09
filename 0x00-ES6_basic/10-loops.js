export default function appendToEachArrayValue(array, appendString) {
  for (let elem of array) {
    elem = appendString + elem;
  }

  return array;
}
