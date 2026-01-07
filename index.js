// Purge Most Frequent
// Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.

// If multiple values are tied for most frequent, remove all of them.
// Do not change any of the other elements or their order.

function purgeMostFrequent(arr) {
  console.log(arr);

  // find most frequent

  // frequency map
  const freq = {};
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    // for each value, add it to your object as a key and increment its value
    freq[item] = (freq[item] || 0) + 1;
  }

  console.log(freq);
  // if it doesnt exist yet, start it at 1

  // find the high score
  // Object.values(myMap) returns an array of just counts
  const counts = Object.values(freq);
  console.log(counts);
  // Math.max(...counts) to find the largest frequency
  const most = Math.max(...counts);
  console.log(most);

  // purge
  // filter original array
  const purge = arr.filter((item) => freq[item] !== most);
  console.log(purge);
  // inside filter check frequency map for the current element
  // if frequency is less than max frequency, keep it!

  return purge;
}
