const { append } = require("express/lib/response");

class alministrador {
  constructor(nombre, correo, password) {
    // propiedades o caracteristicas
    this.nombre = nombre;
    this.correo = correo;
    this.password = password;
  }
  constructor(nombre2, correo2, password2) {
    // propiedades o caracteristicas
    this.nombre2 = nombre2;
    this.correo2 = correo2;
    this.password2 = password2;
  }

}
  // intancia del alministardor
  const datos=new  alministrador("alex","alex711@gmail.com","alex711")
  console.log(datos.nombre)

  const datos2=new  alministrador("ana","ana711@gmail.com","ana711")
  console.log(append(datos2))