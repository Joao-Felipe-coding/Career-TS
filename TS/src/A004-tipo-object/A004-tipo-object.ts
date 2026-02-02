const objectA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};

objectA.chaveB = 'valorC';

console.log(objectA);
