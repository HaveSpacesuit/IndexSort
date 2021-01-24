/**
 * Sorts an array of numbers with index sort algorithm
 * @param {number[]} items The initial array to sort
 * @param {number} min The minimum number in the initial array
 * @param {number} max The maximum number in the initial array
 * @param {number} arrayLength The length of the initial array
 */
export function simpleNumericIndexSort(
  items: number[],
  min: number,
  max: number,
  arrayLength: number
): number {
  const sortedArray = new Array(arrayLength);

  for (const value of items) {
    // Find percent between min and max
    const percentBetween = (value - min) / (max - min);

    // Find position in array closest to this percent
    let arrayPosition = Math.round(percentBetween * arrayLength);

    // If index is occupied by an equal value, move up the array until this is not the case
    while (sortedArray[arrayPosition] == value) {
      arrayPosition++;
    }

    // If index is occupied, we need a finer grain sort. Double the array and try again
    if (sortedArray[arrayPosition] != undefined) {
      return simpleNumericIndexSort(items, min, max, arrayLength * 2);
    }

    // Insert the value
    sortedArray[arrayPosition] = value;
  }

  // Remove empty places from the array
  // return sortedArray.filter((value) => value != undefined);
  return sortedArray.length;
}
