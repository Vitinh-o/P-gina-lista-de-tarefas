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

    tarefas = document.getElementById("tarefas").value

    lu= document.getElementById("novas_tarefas")

    // let data_inc = document.getElementById("funcao_data")

    // let data_finc =  Date.toISOString(document.getElementById("funcao_data_finc").value)

    adicionando = document.createElement('li');

    adicionando.innerHTML = tarefas + "<hr>" 

    lu.appendChild(adicionando)

    console.log(adicionando)

}


console.log(botao_func)


