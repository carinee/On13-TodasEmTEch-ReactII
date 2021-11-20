import { useState } from 'react'

function ContaClick() {
  const [variavel, funcaoAtualizadoraDaVariavel] = useState(0)

  function eventoQueChamaFuncaoAtualizadora() {
    funcaoAtualizadoraDaVariavel(variavel + 1)
  }

  return(
    <div>
      <h1>qualquer valor: {variavel}</h1>
      <button onClick={eventoQueChamaFuncaoAtualizadora}> 
        clique para somar +1
      </button>
    </div>
  )
}

export default ContaClick








// let variavel = 0

// function atualiza(){
//   variavel = variavel + 1
// }

//addEventListener('click', atualiza)