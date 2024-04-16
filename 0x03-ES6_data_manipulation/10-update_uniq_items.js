export default function updateUniqueItems(newMap) {
  if (newMap instanceof Map === false) {
    throw new Error('Cannot process');
  }
  for (const elem of newMap.keys()) {
    if (newMap.get(elem) === 1) {
      newMap.set(elem, 100);
    }
  }
}
