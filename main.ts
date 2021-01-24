// To run from command line:
// npm install -g ts-node
// npm install -g typescript
// ts-node main.ts

import { indexSort, numberToNumber, stringToNumber } from "./indexSort";

function printArray(array: any[]): void {
  const joined = array.join(", ");
  console.log(joined);
}

const numericSorted = indexSort(
  [6, 2, 8, 3, 1, 8, 5, 3, 0, 7, 1, 8],
  numberToNumber
);
printArray(numericSorted);

const alphaSorted = indexSort(
  ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
  stringToNumber
);
printArray(alphaSorted);
