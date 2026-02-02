// Array<T>
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplicaArgs(1, 2, 3);
console.log(result);

// T[]
export function toUpperCase(...args: string[]): string {
  return args.map((valor) => valor.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);
