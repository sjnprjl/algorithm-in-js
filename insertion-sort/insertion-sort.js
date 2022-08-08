function insertionSort(arr) {
  const _arr = [...arr];
  let marker = 0;
  let current = 1;
  while (marker <= arr.length) {
    for (let i = marker; i >= 0; i--) {
      if (_arr[current] < _arr[i]) {
        [_arr[current], _arr[i]] = [_arr[i], _arr[current]];
        current--;
      }
    }
    current = ++marker;
  }
  return _arr;
}

module.exports = insertionSort;
