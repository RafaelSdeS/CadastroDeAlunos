var j = 0
var r = 0
var tabela = document.querySelector("table")

// Função cadastrar // 

function cadastrar()
{
r++
var nomeInput = document.getElementById("name").value
var notaInput = document.getElementById("nota").value
var nascInput = document.getElementById("data").value
var teleInput = document.getElementById("tele").value


if (nomeInput == "" ){alert("Você não registrou um nome")} 
if (notaInput == "" ){alert("Você não registrou um nota")}
if (teleInput == "" ){alert("Você não registrou um telefone")}
if (nascInput == "" ){alert("Você não registrou uma data de nascimento")}


if(nomeInput == "" || notaInput == "" || nascInput == "" || teleInput == ""){
    alert("Faltam os dados necessários para o cadastro")
}

else 
{
var template = `
<tr>
<td id=nome${j}>${nomeInput}</td>
<td id=nota${j}>${notaInput}</td>
<td id=tele${j}>${teleInput}</td>
<td id=nasc${j}>${nascInput}</td>
<td><button onclick="excluir(this)" style="font-size: 15px; width: 110px; border: 0px">Excluir</button></td>
</tr>`

tabela.innerHTML += template

//alert("Aluno registrado")
j++
}}

// Função excluir //

function excluir(btn){
    
    var conf = confirm("Certeza?")

    if(conf)
    {
     var row = btn.parentNode.parentNode;
     row.parentNode.removeChild(row)
    }}
    
function notamaisalta(){
    var j = 0
    var i = 0
    var m = 0
    var arr1 = []
    var arr2 = []


    // Fazendo um array de arrays de length 4 com os dados // 
 
    while(i < r){
        while(m < r){
            if(document.getElementById("nome" + i) != null && document.getElementById("nota" + i) != null && document.getElementById("tele" + i) != null && document.getElementById("nasc" + i) != null){
            arr2[m] = document.getElementById("nome" + i).firstChild.data
            m++

            arr2[m] = document.getElementById("nota" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("tele" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("nasc" + i).firstChild.data

            break
        }
            break
    }

            arr1[i] = arr2
            i++
            var arr1 = arr1
            var arr2 = []
            var m = 0
        }

    // Sorting pelas notas mais altas //
    sorted = arr1.sort((a,b) => {return b[1]-a[1]})

    // Colocando em uma tabela // 

    tabela.innerHTML = 

    `<tr><th colspan=4>Dados</th>
    <th rowspan=2>Excluir</th></tr>
    <tr><th>Nome</th>
    <th>Nota</th>
    <th>Telefone</th>
    <th>Nascimento</th></tr>`


    for(o = 0; o < arr1.length ; o++){
        if(sorted[o][0] != undefined && sorted[o][1] != undefined && sorted[o][2] != undefined && sorted[o][3] != undefined)
        {
        template = `
        <tr>
        <td id=nome${j}>${sorted[o][0]}</td>
        <td id=nota${j}>${sorted[o][1]}</td>
        <td id=tele${j}>${sorted[o][2]}</td>
        <td id=nasc${j}>${sorted[o][3]}</td>
        <td><button onclick="excluir(this)" style="font-size: 15px; width: 110px; border: 0px">Excluir</button></td>
        </tr>`
        tabela.innerHTML += template
    }
    j++
}

    var j = 0
}

function notamaisbaixa(){
    var j = 0
    var i = 0
    var m = 0
    var arr1 = []
    var arr2 = []


    // Fazendo um array de arrays de length 4 com os dados // 
 
    while(i < r){
        while(m < r){
            if(document.getElementById("nome" + i) != null && document.getElementById("nota" + i) != null && document.getElementById("tele" + i) != null && document.getElementById("nasc" + i) != null){
            arr2[m] = document.getElementById("nome" + i).firstChild.data
            m++

            arr2[m] = document.getElementById("nota" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("tele" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("nasc" + i).firstChild.data

            break
        }
            break
    }

            arr1[i] = arr2
            i++
            var arr1 = arr1
            var arr2 = []
            var m = 0
        }

    // Sorting pelas notas mais altas //
    sorted = arr1.sort((a,b) => {return a[1]-b[1]})

    // Colocando em uma tabela // 

    tabela.innerHTML = 

    `<tr><th colspan=4>Dados</th>
    <th rowspan=2>Excluir</th></tr>
    <tr><th>Nome</th>
    <th>Nota</th>
    <th>Telefone</th>
    <th>Nascimento</th></tr>`


    for(o = 0; o < arr1.length ; o++){
        if(sorted[o][0] != undefined && sorted[o][1] != undefined && sorted[o][2] != undefined && sorted[o][3] != undefined)
        {
        template = `
        <tr>
        <td id=nome${j}>${sorted[o][0]}</td>
        <td id=nota${j}>${sorted[o][1]}</td>
        <td id=tele${j}>${sorted[o][2]}</td>
        <td id=nasc${j}>${sorted[o][3]}</td>
        <td><button onclick="excluir(this)" style="font-size: 15px; width: 110px; border: 0px">Excluir</button></td>
        </tr>`
        tabela.innerHTML += template
    }
    j++
}

    var j = 0
}

function nomeaz() {
    var j = 0
    var i = 0
    var m = 0
    var arr1 = []
    var arr2 = []


    // Fazendo um array de arrays de length 4 com os dados // 
 
    while(i < r){
        while(m < r){
            if(document.getElementById("nome" + i) != null && document.getElementById("nota" + i) != null && document.getElementById("tele" + i) != null && document.getElementById("nasc" + i) != null){
            arr2[m] = document.getElementById("nome" + i).firstChild.data
            m++

            arr2[m] = document.getElementById("nota" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("tele" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("nasc" + i).firstChild.data

            break
        }
            break
    }

            arr1[i] = arr2
            i++
            var arr1 = arr1
            var arr2 = []
            var m = 0
        }

    // Sorting pelas notas mais altas //
    sorted = arr1.sort((a,b) => {
        if(a[0] < b[0]) { return -1; }
        if(a[0] > b[0]) { return 1; }
        return 0})

    // Colocando em uma tabela // 

    tabela.innerHTML = 

    `<tr><th colspan=4>Dados</th>
    <th rowspan=2>Excluir</th></tr>
    <tr><th>Nome</th>
    <th>Nota</th>
    <th>Telefone</th>
    <th>Nascimento</th></tr>`


    for(o = 0; o < arr1.length ; o++){
        if(sorted[o][0] != undefined && sorted[o][1] != undefined && sorted[o][2] != undefined && sorted[o][3] != undefined)
        {
        template = `
        <tr>
        <td id=nome${j}>${sorted[o][0]}</td>
        <td id=nota${j}>${sorted[o][1]}</td>
        <td id=tele${j}>${sorted[o][2]}</td>
        <td id=nasc${j}>${sorted[o][3]}</td>
        <td><button onclick="excluir(this)" style="font-size: 15px; width: 110px; border: 0px">Excluir</button></td>
        </tr>`
        tabela.innerHTML += template
    }
    j++
}

    var j = 0
}   
function nomeza() {
    var j = 0
    var i = 0
    var m = 0
    var arr1 = []
    var arr2 = []


    // Fazendo um array de arrays de length 4 com os dados // 
 
    while(i < r){
        while(m < r){
            if(document.getElementById("nome" + i) != null && document.getElementById("nota" + i) != null && document.getElementById("tele" + i) != null && document.getElementById("nasc" + i) != null){
            arr2[m] = document.getElementById("nome" + i).firstChild.data
            m++

            arr2[m] = document.getElementById("nota" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("tele" + i).firstChild.data

            m++
            arr2[m] = document.getElementById("nasc" + i).firstChild.data

            break
        }
            break
    }

            arr1[i] = arr2
            i++
            var arr1 = arr1
            var arr2 = []
            var m = 0
        }

    // Sorting pelas notas mais altas //
    sorted = arr1.sort((a,b) => {
        if(a[0] > b[0]) { return -1; }
        if(a[0] < b[0]) { return 1; }
        return 0})

    // Colocando em uma tabela // 

    tabela.innerHTML = 

    `<tr><th colspan=4>Dados</th>
    <th rowspan=2>Excluir</th></tr>
    <tr><th>Nome</th>
    <th>Nota</th>
    <th>Telefone</th>
    <th>Nascimento</th></tr>`


    for(o = 0; o < arr1.length ; o++){
        if(sorted[o][0] != undefined && sorted[o][1] != undefined && sorted[o][2] != undefined && sorted[o][3] != undefined)
        {
        template = `
        <tr>
        <td id=nome${j}>${sorted[o][0]}</td>
        <td id=nota${j}>${sorted[o][1]}</td>
        <td id=tele${j}>${sorted[o][2]}</td>
        <td id=nasc${j}>${sorted[o][3]}</td>
        <td><button onclick="excluir(this)" style="font-size: 15px; width: 110px; border: 0px">Excluir</button></td>
        </tr>`
        tabela.innerHTML += template
    }
    j++
}

    var j = 0
}   
