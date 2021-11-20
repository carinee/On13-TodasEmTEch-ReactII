import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageContato from '../../assets/contato.svg'

const Contato = () => {
  return(
    <>
      <Menu />
      <Header image={ImageContato}>Chama no contatinho</Header>
    </>
  )
}

export default Contato