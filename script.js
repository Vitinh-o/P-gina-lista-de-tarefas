
var botao_func = document.getElementById("botao_funcionalidade")

botao_func.addEventListener("click", abrir_popup)

function abrir_popup(){

    let form = document.getElementById("form_func")

    form.style.display = "block"

    console.log("teste")

}

var img_func = document.getElementById("img_func")

console.log(img_func)

img_func.addEventListener("click", fechar_img)


function fechar_img(){
    let form = document.getElementById("form_func")

    form.style.display = "none"

    console.log("teste")
}


var tarefas = document.getElementById("botao_adicionar")

tarefas.addEventListener("click", adicionar_tarefas)

function adicionar_tarefas(){

    let tarefas 

    let adicionando

    let descricao = document.getElementById("descricao").value

    let titulo = document.getElementById("titulo").value

    ul= document.getElementById("novas_tarefas")

    adicionando = document.createElement('li');
    adicionando.setAttribute("id" ,"list-item")

    adicionando.innerHTML = titulo 

    ul.appendChild(adicionando)

    li = document.getElementById("list-item")

    adicionando = document.createElement('p');
    
    adicionando.innerHTML = "Descrição: " +  "<br>" + "......." + descricao  

    li.appendChild(adicionando)

    guarda_valor(titulo, descricao)

}





if (localStorage.hasOwnProperty("lista")) {
    var guarda_valores = JSON.parse(localStorage.getItem("lista"))
  }
else{
     guarda_valores = {tarefas_guard: []}
}



function guarda_valor(titulo)
{

    guarda_valores.tarefas_guard.push(titulo)
    
    json = JSON.stringify(guarda_valores)

    localStorage.setItem("lista", json)

    console.log(json)
    console.log(titulo)
    console.log(guarda_valores.tarefas_guard)

    

}


function recupera_dados()
{
    console.log("teste 2")
    let mudar_json = localStorage.getItem("lista")

     let novo_json = JSON.parse(mudar_json)

    for (let i in novo_json.tarefas_guard)
    {
        let lu = document.getElementById("novas_tarefas")

        let adicionando = document.createElement('li');

        adicionando.innerHTML = novo_json.tarefas_guard[i] + "<hr>" 
    
        lu.appendChild(adicionando)

        console.log(novo_json)
        console.log(i)
    } 
}

recupera_dados()



