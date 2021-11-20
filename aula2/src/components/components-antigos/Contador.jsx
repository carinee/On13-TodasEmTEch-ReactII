import { useState } from 'react'

const Contador = () => {
  const [variavel, funcaoAtualizadora] = useState(0)

  const chamaEvento = () => {
    funcaoAtualizadora(variavel + 1)
  }

  return(
    <div>
      <h1>{variavel}</h1>
      <button onClick={chamaEvento}>Clique + 1</button>
    </div>
  )
}

export default Contador