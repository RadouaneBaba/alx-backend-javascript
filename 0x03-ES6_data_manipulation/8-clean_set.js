export default function cleanSet(newSet, startString) {
  if (startString === '') {
    return '';
  }
  let finalString = '';
  for (const elem of newSet) {
    if (elem.startsWith(startString)) {
      finalString += elem.substring(startString.length);
      finalString += '-';
    }
  }
  finalString = finalString.slice(0, -1);
  return finalString;
}
