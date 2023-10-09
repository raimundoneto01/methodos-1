// inserindo o valor do input na tela
// exemplo:

const convidado = document.getElementById('convidado')
const btnSend = document.getElementById('btnSend')
const lista = document.getElementById('lista')
const filter = document.getElementById('filter')

 
const convidados = []     // array que ta recebendo os dados do input .


function handleClick(array){

    const resultado = lista.innerHTML = array.map((convidado) => {
            return `<li>${convidado}</li>`
         }).join("");

    return resultado      
}

function handleConvidados(){
    convidados.push(convidado.value)
    handleClick(convidados)
    convidado.value = ""    // enviar os dados para o array ..
}


function handlerConvidadosFiltrado(){
    const convidadosFilter = convidados.filter((convidado) =>
    convidado.toLowerCase().includes(filter.value.toLowerCase())
    );
    handleClick(convidadosFilter)   // filter de pesquisa - input .
}



btnSend.addEventListener('click', handleConvidados)  // botão de enviar .

filter.addEventListener('input', handlerConvidadosFiltrado) // pesquisa dos dados ...