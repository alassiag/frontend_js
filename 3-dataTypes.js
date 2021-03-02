
 /** 
console.log(`
  Strings:
  1. Crear 3 variables cada una debe tener un dato especifico (name, age, nationality)
  2. Escribir 1 console.log armando la siguiente frase "Hola me llamo ..., el doble de mi edad es ... y soy ..."
  Boolean:
  1. Crear 1 variable con el siguiente resultado, tu edad es mayor a 90 ?
  Null and Undefined
  1. Crear 2 variables cada una deberia tener un dato especifico (name, age)
  2. Escribir un console.log con el siguiente resultado "Hola me llamo null y tengo undefined años"
`)
*/

let _name = 'Gabriel';
let _age = '50';
let _nationality = "Argentino"

console.log(`Hola me llamo ${_name}, el doble de mi edad es ${_age * 2} años y soy ${_nationality}`)

let _result = (_age === 0)
console.log(`Mi edad es mayor a 90 ? ${_result}`)

let _name2
let _age2 = null

console.log(`Hola me llamo ${_age2} y tengo ${_name2} años`)
