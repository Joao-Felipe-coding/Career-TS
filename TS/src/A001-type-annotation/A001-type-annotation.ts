/*eslint-disable*/

//tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'João'; //Qualquer tipo de strings: '', "", ``
let idade: number = 0xf00d; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //true, false
let simbolo: symbol = symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n; //bigit

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a, b, c'];
let arrayDeStrings2: string[] = ['a, b, c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 20,
    nome: 'João Felipe',
    adulto: true,
};

//Funções ()
function soma(x:number, y: number) {
    return x + y;
}
const soma2: (x:number, y: number) => number = (x, y) => (x + y);
