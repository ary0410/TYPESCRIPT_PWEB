function printHello(): void{
    console.log("Hello World!");
}
printHello();

//NEVER --> nunca retorna nada
function handleError(): never{
    console.log("Hello World!");
    throw new Error("This function never normally");
}

handleError();