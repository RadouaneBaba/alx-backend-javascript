export default function updateUniqueItems(newMap) {
  for (const elem of newMap.keys()) {
    if (newMap.get(elem) === 1) {
      newMap.set(elem, 100);
    }
  }
}
