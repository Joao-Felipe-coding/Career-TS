//Lembrar de avisar caso uma função não retornará algo, com o void:

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('João', 'Felipe');

const pessoa = {
  nome: 'João',
  sobrenome: 'Felipe',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
