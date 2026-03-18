//DOM - aula 6
//Hierarquia - vimos no no roblox - PARENT (pai) - CHILD(filho)
//Sibling (irmão ou parente) -está no mesmo NIVEL que o CHILD
//

//const user = {
    //firstName: "John",
    //lastName: "Doe",
    //age: 50,
    //eyeColor: "blue",
    //hair: "bald",
   // sayHello: function(){
  //      alert("Hello")
   // }
//}

//user.sayHello()
//alert(user.firstName)
//alert(user.lastName)

//getElementByClassName


const linhas = document.getElementsByClassName("linha-filme")
console.log(linhas)

console.log(linhas[0])
console.log(linhas[1])

console.log(linhas[0].children)

for(let i = 0; i < 3; i++){
    console.log(linhas[i])
}

for(let l = 0; l < 3; l++){
    const celulas = linhas[l].children
    for (let c = 0; c < 4; c++){
        console.log(celulas[c])
    }
}

const baseDados = [
    //titulo, ano, status, nota
]
//ligar a base de dados com a tabela. DICA: USANDO FOR e textContent
//elemento[0].textContent = "bla bla bla" ----- baseDeDados[i].titulo


