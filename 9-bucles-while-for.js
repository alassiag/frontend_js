
console.log(`
  Usa el bucle for para mostrar usando console.log números pares del 2 al 10 inclusive.
  Remplazar este while por for (la salida debe ser la misma)
`)

console.log('" while "')

let i = 0
while (i <= 10) {
    if (i % 2 == 0 && i !=0) {
        console.log( `numero ${i}!` )
    }
    i++
}

console.log('" for "')

for (let i = 0; i <= 10; i++) {
   if (i % 2 == 0 && i !=0) {
      console.log( `numero ${i}!` )
    }
}