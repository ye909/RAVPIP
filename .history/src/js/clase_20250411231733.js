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
datos= new  persona("alex",23,"ti")
console.log(datos,  pais(),genero())