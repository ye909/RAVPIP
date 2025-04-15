class persona{
  constructor(nombre,edad,trabajo,comida){
    this.nombre = nombre
    this.edad = edad
    this.trabajo = trabajo
    this.comida= comida


  }

  pais(){
console.log("colombia" ,this.comida)
  }

  genero(){
    console.log("hombre")
  }
}
const datos= new  persona("alex",23,"ti","carne")
console.log(datos  )
datos.genero() 
datos.pais()