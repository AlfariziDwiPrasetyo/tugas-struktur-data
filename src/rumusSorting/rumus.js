export function sortByNIMAscending(data) {
  return data.slice().sort((a, b) => a.nim - b.nim);
}

export function sortByNIMDescending(data) {
  return data.slice().sort((a, b) => b.nim - a.nim);
}
