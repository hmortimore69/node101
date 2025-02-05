/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

/*
  This function compares two arrays: arr1 and arr2
  If the arrays are of equal length AND every element of arr1 equals that of arr2 at the same index, 
  return true else false.
*/
export function compare(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((element, index) => element === arr2[index]);
}

/*
  This function accepts an array of numbers.
  The function returns the largest number in the array by comparing each value to the current largest.
  First, check if the array is empty. If it is, return 0.
  Initialise the largest to be equal to the first index of the array, then compare each value
  to the current largest element.
*/
export function largest(arr) {
  if (arr.length === 0) return 0;
  
  let largest = arr[0];

  for (const item of arr) {
    if (item > largest) largest = item;
  }

  return largest;
}

/*
  Input: Array of numbers
  Output: Number closest to 0
  Description: This function works by first checking if the array is empty and if it is return 0.
  Otherwise, initialise "smallest" to the first element in the array.
  Then iterate over the array, and compare if the absolute value of the current item 
  is less than the absolute value of the current smallest. If it is, then it is closer to 0 and 
  smallest is updated.
*/
export function zeroest(arr) {
  if (arr.length === 0) return 0;

  let smallest = arr[0];

  for (const item of arr) {
    if (Math.abs(item) < Math.abs(smallest)) smallest = item;
  }

  return smallest;
}