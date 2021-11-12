(function (win, doc) {
  'use strict';

  var $inputTitle = doc.querySelector('[data-js="inputTitle"]')
  var $inputAutor = doc.querySelector('[data-js="inputAutor"]')
  var $inputValue = doc.querySelector('[data-js="inputValue"]')
  const $btnCadastro = doc.querySelector('[data-js="btnCadastro"]')
  const $tableList = doc.querySelector('[data-js="tableList"]')
  

  $btnCadastro.addEventListener('click', verifyValue, false);

  function getInfo(){
    verifyValue()
    console.log($inputTitle.value)
    console.log($inputAutor.value)
    console.log($inputValue.value)
  }

  function verifyValue(){
    if($inputTitle.value == '' || $inputAutor.value == '' || $inputValue.value == ''){
     return alert('Para que o cadastro seja feito você precisa preencher todos os dados ;)');
    }
    
    createTable()
    
  }

  function createTable(){
    var $tr = doc.createElement('tr');
    var $tdTitle = doc.createElement('td');
    var $tdAutor = doc.createElement('td');
    var $tdValue = doc.createElement('td');
    var $tdRemove = doc.createElement('button');

    $tdTitle.textContent = $inputTitle.value;
    $tdAutor.textContent = $inputAutor.value
    for(var i=0; i<$inputValue.value;i++){
       $tdValue.insertAdjacentHTML("afterbegin",`<img src="estrela.svg" alt="lata de lixo" class="svgs">`)
    }

    $tdRemove.setAttribute('id','meuId');
    $tdRemove.insertAdjacentHTML("afterbegin",`<img src="lata-de-lixo.svg" alt="lata de lixo" class="svgs">`)

    $tr.appendChild($tdTitle)
    $tr.appendChild($tdAutor)
    $tr.appendChild($tdValue)
    $tr.appendChild($tdRemove);

    clearInput(); //coloquei um limpa inputs

    $tdRemove.addEventListener("click", () => {
      return $tr.parentNode.removeChild($tr);
    });

    return $tableList.appendChild($tr);
  }

  function clearInput(){
    $inputTitle.value = '';
    $inputAutor.value = '';
    $inputValue.value = '';
  }
  
})(window, document);
