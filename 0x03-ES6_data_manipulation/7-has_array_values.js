export default function hasValuesFromArray(newSet, filterArr) {
  for (const elem of filterArr) {
    if (!newSet.has(elem)) {
      return false;
    }
  }
  return true;
}
