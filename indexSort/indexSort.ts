import { SortItem, toSortItem } from "./generics";
import {
  filterOutUndefined,
  findMinMax,
  percentBetweenMinAndMax,
  targetArrayIndex,
} from "./utils";

/**
 * Sorts an array with index sort algorithm
 * @template T
 * @param {number[]} items The initial array to sort
 * @param {(value: T) => number} toNumber Function to convert T to a sortable number
 * @returns {T[]} A new array of items in sorted order
 */
export function indexSort<T>(items: T[], toNumber: (value: T) => number): T[] {
  const sortItems = items.map((item) => toSortItem(item, toNumber));
  const sortedItems = numericIndexSort(sortItems);
  return sortedItems.map((item) => item.actualValue);
}

function numericIndexSort(unsortedArray: SortItem[]): SortItem[] {
  const { min, max } = findMinMax(unsortedArray.map((i) => i.numericValue));
  const arrayLength = unsortedArray.length;
  return indexSortInner(unsortedArray, min, max, arrayLength);
}

function indexSortInner(
  unsortedArray: SortItem[],
  min: number,
  max: number,
  arrayLength: number
): SortItem[] {
  const sortedArray = new Array(arrayLength);

  for (const item of unsortedArray) {
    const percentBetween = percentBetweenMinAndMax(item.numericValue, min, max);

    const arrayIndex = targetArrayIndex(percentBetween, sortedArray, item);

    if (sortedArray[arrayIndex] !== undefined) {
      const doubleLength = 2 * sortedArray.length;
      return indexSortInner(unsortedArray, min, max, doubleLength);
    }

    sortedArray[arrayIndex] = item;
  }

  const sorted = filterOutUndefined(sortedArray);
  return sorted;
}
