import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = (typeof fruits)[0 | 1]; // Extracted the type for AppleOrBanana to be 'apple' or 'banana'
type Fruit = (typeof fruits)[number]; // Used number to get all the types for fruits.

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
