

const rentalform= document.getElementById("rental-form")
async function a() {
    const res= await fetch("/src/js/produtosAlquiler.json")
    const data= await res.json()
   
    data.forEach(item => {
      
        const formcontainer = document.createElement("div")
        formcontainer.classList.add("form-group")
        formcontainer.setAttribute("id","form-group")
        console.log(formcontainer)

        console.log(rentalform) 

    });
   

   


                   

                



}
