type ArraUniqueTypes<T> = T[];

const teste: ArraUniqueTypes<string> = ["como", "isso é", "chato"];
const teste2: ArraUniqueTypes<number | boolean> = [20, 30, true];

const arrNumber: number[] = [1, 2, 3, 4];

const arrNumber2: Array<number> = [1, 2, 3, 4];
