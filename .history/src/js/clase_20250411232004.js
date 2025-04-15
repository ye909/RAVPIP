class persona{
  constructor(nombre,edad,trabajo){
    this.nombre = nombre
    this.edad = edad
    this.trabajo = trabajo

  }

  pais(){
console.log("colombia")
  }

  genero(){
    console.log("hombre")
  }
}
const datos= new  persona("alex",23,"ti")
console.log(datos,  datos.genero() ,datos.pais())