export default function cleanSet(newSet, startString) {
  if (!startString || !newSet || !(newSet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  let finalString = '';
  for (const elem of newSet) {
    if (elem.startsWith(startString)) {
      finalString += elem.slice(startString.length);
      finalString += '-';
    }
  }
  if (finalString.length > 0) {
    finalString = finalString.slice(0, -1);
  }
  return finalString;
}
