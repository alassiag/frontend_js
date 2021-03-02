class Persona {

    constructor(nombre, edad){
     this.nombre = nombre;
     this.edad = edad;
    }

saludar() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

}

let persona = new Persona('gabriel', 50);
persona.saludar();