const form = document.getElementById('form');
const btns = document.getElementById('btnJson');
const title = document.getElementById('title-form');
const inputType = document.getElementById('inputType');
const message = document.getElementById('msg');

function addInput () {
  // Cria um novo elemento de div para o novo input
  var newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'form-group')

  // Cria um novo elemento de rótulo para o novo input
  var newLabel = document.createElement('label')
  newLabel.setAttribute('for', $('#generator').val())
  newLabel.setAttribute(
    'id',
    $('#generator').val() + (document.getElementsByTagName('input').length + 1)
  )

  newLabel.setAttribute('class', 'col-form-label')
  newLabel.innerHTML = $('#generator').val()

  // Cria um novo elemento de input para o novo campo
  var newInput = document.createElement('input')
  newInput.setAttribute('type', inputType.value)
  newInput.setAttribute('class', 'form-control mb-3')
  newInput.setAttribute('id', $('#generator').val())
  newInput.setAttribute('name', $('#generator').val())
  newInput.setAttribute('value', '')

  // Adiciona o novo rótulo e novo campo ao novo elemento div
  newDiv.appendChild(newLabel)
  newDiv.appendChild(newInput)

  // Adiciona o novo elemento div ao formulário
  document.getElementById('inputs').appendChild(newDiv)
  $('#generator').val('')
  btns.classList.remove('visually-hidden')
  title.classList.remove('visually-hidden')
}

function gerarJON () {
  var formulario = form
  var inputs = form.querySelectorAll('input')

  if (inputs.length) {
    let objeto = {}
    // Loop através de cada input e exibe o valor no console
    inputs.forEach((input, index) => {
      let chave = input.id
      type = input.type
      var label = document.querySelector('#' + input.id + `${index + 2}`)
      console.log('#' + input.id + `${index + 2}`)
      console.log(input.type)
      objeto[chave] = type == 'number' ? parseInt(input.value) : input.value
    })
    console.log(objeto)

    campo = document.getElementById('campo')
    campo.innerHTML = '';
    campo.innerHTML += `<pre><code>${JSON.stringify(objeto)}</code></pre>`;
  }
}

function copiar () {
  const codigo = document.querySelector('pre code')
  console.log(codigo)
  if (codigo !== null) {
    const conteudo = codigo.textContent
    const areaTransferencia = document.createElement('textarea')
    areaTransferencia.value = conteudo
    document.body.appendChild(areaTransferencia)
    exibeAlert('copiado com sucesso')
    areaTransferencia.select()
    document.execCommand('copy')

    document.body.removeChild(areaTransferencia)
  }else{
    exibeAlert('Não tem texto a ser copiado')
  }
}

function limpar () {
  campo.innerHTML = ''
}

function exibeAlert(text) {
message.classList.toggle('visually-hidden');
message.innerHTML = text;
setTimeout(() => {
    message.classList.toggle('visually-hidden');
    message.innerHTML = '';
}, 1500);
 }
