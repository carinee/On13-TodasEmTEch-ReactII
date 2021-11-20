import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageHome from '../../assets/ilustra.svg'

const Home = () => {
  return(
    <>
      <Menu />
      <Header image={ImageHome}>Seja bem vinda ao meu mundo</Header>

    </>
  )
}

export default Home