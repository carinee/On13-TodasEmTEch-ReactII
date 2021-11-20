import { useState, useEffect } from 'react'

function BuscaPersonagem() {
  const [personagens, setPersonagens] = useState([])
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(resposta => resposta.json())
    .then(dados => setPersonagens(dados.results))
  }, [])

  useEffect(()=> {
    setFiltro(
      personagens.filter(persongem => {
        return persongem.name.includes(busca)
      })
    )
  }, [busca, personagens])

  return(
    <>
      <input 
        placeholder="Digite o nome de um personagem" 
        onChange={(e)=> {setBusca(e.target.value)}}
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

export default BuscaPersonagem