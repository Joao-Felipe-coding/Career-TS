//Tuple
const dadosCliente1: readonly [number, string] = [20, 'João'];
const dadosCliente2: [number, string, string] = [20, 'João', 'Felipe'];
const dadosCliente3: [number, string, string?] = [20, 'João'];
const dadosCliente4: [number, ...string[]] = [20, 'João', 'Felipe'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ['João', 'Felipe'];
const array2: ReadonlyArray<string> = ['João', 'Felipe'];

console.log(array1);
console.log(array2);
