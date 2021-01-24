import { SortItem } from "./generics";

export function findMinMax(
  unsortedArray: number[]
): { min: number; max: number } {
  let min = unsortedArray[0];
  let max = unsortedArray[0];
  for (const item of unsortedArray) {
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
  }
  return { min, max };
}

export function percentBetweenMinAndMax(
  value: number,
  min: number,
  max: number
): number {
  return (value - min) / (max - min);
}

export function targetArrayIndex(
  percentBetween: number,
  sortedArray: SortItem[],
  sortItem: SortItem
): number {
  const arrayIndex = closestArrayIndex(percentBetween, sortedArray.length);

  const incrementedIndex = incrementIndexPastDuplicates(
    arrayIndex,
    sortedArray,
    sortItem
  );

  return incrementedIndex;
}

export function closestArrayIndex(
  percentBetween: number,
  arrayLength: number
): number {
  const arrayPosition = percentBetween * arrayLength;
  return Math.round(arrayPosition);
}

export function incrementIndexPastDuplicates(
  startingIndex: number,
  sortedArray: SortItem[],
  sortItem: SortItem
): number {
  let incrementedIndex = startingIndex;

  while (sortedArray[incrementedIndex]?.numericValue == sortItem.numericValue) {
    incrementedIndex++;
  }

  return incrementedIndex;
}

export function filterOutUndefined(array: any[]): any[] {
  return array.filter((item) => item !== undefined);
}
