import { useState } from 'react' //primeiro passo

const Relogio = () => {
  let time = new Date().toLocaleTimeString()
  //segundo passo é usar o useState

  const [horario, setHorario] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
  //terceiro passo é atualizar o valor(variavel horario) com a função de atualização(setHorario)
    setHorario(time)
  }
  
  setInterval(updateTime, 1000)
  return(
    <h1>Horário local: {horario}</h1> //é mostrar na tela a minha variavel que guarda o estado
  )
}

export default Relogio