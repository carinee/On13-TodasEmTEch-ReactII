import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
 
import ImagePortfolio from '../../assets/portfolio.svg'

const Portfolio = () => {
  return(
    <>
      <Menu />
      <Header image={ImagePortfolio}>Meus jobs</Header>
    </>
    
  )
}

export default Portfolio