export type SortItem = {
  numericValue: number;
  actualValue: any;
};

export function toSortItem<T>(
  item: T,
  toNumber: (value: T) => number
): SortItem {
  return {
    numericValue: toNumber(item),
    actualValue: item,
  } as SortItem;
}

export function numberToNumber(value: number): number {
  return value;
}

export function stringToNumber(value: string): number {
  let numericValue = 0;
  for (let i = 0; i < value.length; i++) {
    const multiplier = 1 / Math.pow(128, i);
    const charValue = value.charCodeAt(i) * multiplier;
    numericValue += charValue;
  }
  return numericValue;
}
