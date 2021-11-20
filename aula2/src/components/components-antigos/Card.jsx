//Consumir uma api e fazer os dados aparecerem na tela quando a tela for carregada
import { useState, useEffect } from 'react'

function Card() {
  const [personagens, setPersonagens] = useState([])
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(resposta => resposta.json())
      .then(dados => setPersonagens(dados.results))
  },[])

  useEffect(()=> {
    setFiltro(
      personagens.filter(personagem =>  {
        return personagem.name.includes(busca)
      })
    )
  }, [personagens, busca])

  return(
    <>
      <input 
        placeholder="Digite o nome de um personagem" 
        onChange={e => {setBusca(e.target.value)}}
      />
      {filtro.map(pessoa => 
        <div key={pessoa.id}>
          <h2>{pessoa.name}</h2>
          <img 
            src={pessoa.image} 
            alt={pessoa.name}
          />
        </div>
      )}
    </>
  )
}

export default Card