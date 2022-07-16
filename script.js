var botao_func = document.getElementById("botao_funcionalidade")

botao_func.addEventListener("click", abrir_popup)

function abrir_popup(){

    let form = document.getElementById("form_func")

    form.style.display = "inline"

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

var i = 0   

var tarefas = document.getElementById("botao_adicionar")

tarefas.addEventListener("click", adicionar_tarefas)

function adicionar_tarefas(){

    let tarefas = []

    let adicionando= []

    tarefas[i] = document.getElementById("tarefas").value

    adicionando[i] = document.getElementById("novas_tarefas")

    console.log(tarefas)

    console.log(adicionando)

    adicionando[i].innerHTML = "<li>" + tarefas + "</li>"
    

    i+=1
}


console.log(botao_func)


