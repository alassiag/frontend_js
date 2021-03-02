
/*************************************
*
*             Ejercicios
*
**************************************/
 
// ejercicio 1
console.log(`1. Escribe el código utilizando if..else que corresponda al siguiente switch:`)

let navegador = 'Edge'

switch (navegador) {
  case 'Edge':
    console.log( "¡Tienes Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Esta bien, soportamos estos navegadores también' );
    break;

  default:
    console.log( '¡Esperamos que esta página se vea bien!' );
}

 console.log("Case to If")

 if (navegador === 'Edge') {
        console.log( "¡Tienes Edge!" )
 }
   else if (navegador === 'Chrome' && 'Firefox' && 'Safari' && 'Opera') {
         console.log( 'Esta bien, soportamos estos navegadores también' )
  }
    else   {
     console.log( '¡Esperamos que esta página se vea bien!' )
    }


// ejercicio 2
console.log ('2. Reescribe el código utilizando solo un argumento switch:')

let a = 0

if (a == 0) {
  console.log( 0 );
}
if (a == 1) {
  console.log( 1 );
}

if (a == 2 || a == 3) {
  console.log( '2,3' );
}

console.log("If to Case")

switch(a) {
    case 0:
        console.log( 0 );
        break;
    case 1:
            console.log( 1 );
        break;
    case 2:
    case 3:    
            console.log( '2,3' );
        break;        
}