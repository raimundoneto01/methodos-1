// inserindo o valor do input na tela
// exemplo:

const convidado = document.getElementById('convidado')
const btnSend = document.getElementById('btnSend')
const lista = document.getElementById('lista')
const filter = document.getElementById('filter')

 // array que ta recebendo os dados do input .
const convidados = []

btnSend.addEventListener('click', ()=>{

    convidados.push(convidado.value)
    lista.innerHTML = convidados.map((convidado) =>{
        return `<li>${convidado}</li>`
    })

    .join("") // o join() para limpar a vírgula
    console.log(convidados);
    convidado.value = ""
    // limpando o input
})

// filter de pesquisa - input.
filter.addEventListener('input', ()=>{

    const convidadosFilter = convidados.filter((convidado) =>
    convidado.toLowerCase().includes(filter.value.toLowerCase())
    );

    lista.innerHTML = convidadosFilter.map((convidado) => {
        return`<li>${convidado}</li>`
    })
    
    .join("")
    console.log(convidadosFilter);
})