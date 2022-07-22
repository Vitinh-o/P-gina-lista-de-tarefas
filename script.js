
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


var j = 0   

var tarefas = document.getElementById("botao_adicionar")

tarefas.addEventListener("click", adicionar_tarefas)

function adicionar_tarefas(){

    let tarefas 

    let adicionando

    let descricao = document.getElementById("descricao").value

    let titulo = document.getElementById("titulo").value

    let hora_inc = document.getElementById("funcao_data")

    console.log(hora_inc)

    ul= document.getElementById("novas_tarefas")

    adicionando = document.createElement('li');
    adicionando.setAttribute("class" ,"list-item")

    adicionando.innerHTML = titulo 

    ul.appendChild(adicionando)

    li = document.getElementsByTagName("li")[j]

    adicionando = document.createElement('p');
    
    adicionando.innerHTML = "Descrição: " +  "<br>" + "......." + descricao  

    li.appendChild(adicionando)
    j++
    
    guarda_valor(titulo, descricao)

}





if (localStorage.hasOwnProperty("lista")) {
    var guarda_valores = JSON.parse(localStorage.getItem("lista"))
    //console.log("teste novo")
}
else{
     guarda_valores = {titulo_guard:[],
                        descricao_guard:[]}

    console.log(guarda_valores)
}



function guarda_valor(titulo ,descricao)
{

    guarda_valores.titulo_guard.push(titulo)
    guarda_valores.descricao_guard.push(descricao)
    
    

    json = JSON.stringify(guarda_valores)

    localStorage.setItem("lista", json)

   /* console.log(json)
    console.log(titulo)
    console.log(guarda_valores)*/
}


function recupera_dados()
{
    //console.log("teste 5")
    let mudar_json = localStorage.getItem("lista")

     let novo_json = JSON.parse(mudar_json)
     //console.log(novo_json)
    
     for (i in novo_json.titulo_guard)
    {
        //console.log("entrou no for")
        let lu = document.getElementById("novas_tarefas")

        let adicionando = document.createElement('li');
        adicionando.setAttribute("id" ,"list-item")

        adicionando.innerHTML = novo_json.titulo_guard[i]
    
        lu.appendChild(adicionando)
        
        li = document.getElementsByTagName("li")[i]

        adicionando = document.createElement('p');

        adicionando.innerHTML = "Descrição: " +  "<br>" + "......." + novo_json.descricao_guard[i]  
    
        li.appendChild(adicionando)
    } 
}

recupera_dados()



