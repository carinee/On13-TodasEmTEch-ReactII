import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'

import ImageSobre from '../../assets/about.svg'

const Sobre = () => {
  return(
    <>
      <Menu />
      <Header image={ImageSobre}>Prazer, Simara</Header>      
    </>
  )
}

export default Sobre