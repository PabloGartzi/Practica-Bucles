//EJERCICIO 1
/*Escribe un programa en JavaScript que calcule la suma de todos los números enteros del 1 al 100. El resultado debe imprimirse en la consola.*/
function sumN(n){ //NO HABIA QUE HACERLO DE ESTA FORMA PERO LO DEJO PORQUE TAMBIÉN ES CORRECTO
    let k = (n*(n+1)/2);
    console.log(k);
    return k
}
function sumNFor(n){
    let suma = 0;
    for(let i = 1; i<= n; i++){
        suma += i
    }
    console.log(suma);
    return suma
}
sumN(100); //Suma Gaussiana
sumNFor(100); //Suma haciendo uso de bucle for

//EJERCICIO 2
/*Escribe un programa que imprima en consola todos los números pares comprendidos entre 1 y 50 (inclusive). Recuerda que un número es par si el resto de dividirlo por 2 es 0.*/
function pares(n){
    for(let i = 0; i<=n; i= i+2){
        console.log(i);
    }
    return 0;
}
function paresV2(n){//USANDO EL MODULO
    for(let i = 0; i<=n; i++){
        if (i %2 == 0){
            console.log(i);
        }
    }
    return 0;
}
pares(50);
paresV2(50);

//EJERCICIO 3
/*Pide al usuario un número mediante prompt(). Luego, imprime su tabla de multiplicar del 1 al 10. Ejemplo de salida si el usuario ingresa 5:
5 x 1 = 5  
5 x 2 = 10  
...  
5 x 10 = 50*/
function tablaMultiplicar(){
    let n;
    do{
        n = prompt("Introduce un número: ");
        n = parseInt(n);
        console.log(typeof(n));
    }
    while (isNaN(n)); //  (typeof numero !== "number" || isNan(n))
    for (let i= 0; i <= 10; i++){
        console.log(n+" x "+i+" = "+n*i); //CUIDADO: Si se tratara de sumar esto no funcionaria
        console.log(`${n} x ${i} = ${n*i} `); // Otra forma
    }
}
tablaMultiplicar();

//EJERCICIO 4
/*Escribe un programa que imprima una cuenta regresiva desde 10 hasta 1. Cada número debe mostrarse en una línea diferente en la consola.*/
function regresiva(){
    for (let i= 10; i >= 0; i--){
        console.log(i);
    }
}
regresiva();

//EJERCICIO 5
function factorial(){
    let fact = 1;
    let n;
    let cadena = "";
    do{
        n = prompt("Introduce un número: ");
        n = parseInt(n);
    }
    while (isNaN(n) || n < 0);
    for (let i= 1; i <= n; i++){
        fact *= i
        cadena +=` ${i} `;
        if (i < n){
            cadena += "x"
        }
    }    
    console.log(`${n}! = ${cadena}= ${fact}`);
}
factorial();

function factorialRecursivo(n){ //Función factorial usando recursividad
    if (n >= 0){
        if ((n == 1)||(n == 0)){
            return 1;
        }
        else{
            return n * factorialRecursivo(n-1);
        }
    }
    else{
        console.log("No existe factorial de un numero negativo.")
    }
}
console.log(factorialRecursivo(6));