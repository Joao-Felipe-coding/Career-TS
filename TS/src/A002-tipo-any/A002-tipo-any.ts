//o tipo any é para ser evitado, por deixar qualquer valor ser encaixado em seu campo,
// ao menos que seja a intensão, evitar que o valor any ocupe espaço de tipo no código

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Oi'));
console.log(showMessage(1));
