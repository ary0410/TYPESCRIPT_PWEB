function soma1(a: number,b: number){
    return a + b;
}

const a = 2;
const resultado = soma1(a,3);

console.log('A soma é: ',resultado);

function foo(bar: number): string{
    return 'hello';
}

console.log(foo(2))