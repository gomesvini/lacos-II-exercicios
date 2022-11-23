/* Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


**Utilize o for...of para resolver**
```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
``` */

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

/* for(i in maioresPaises){
    console.log(`${Number(i) + 1} - ${maioresPaises[i]}`)
} */
let rank = 0

for(i of maioresPaises){
    rank += 1
    console.log(`${rank} - ${i}`)
}  