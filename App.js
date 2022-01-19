import  React, {useState, useEffect} from 'react'
import Header from './components/Header/Header.js'
import Article from './components/Article/Article.js'
import Modal from './components/Modal/Modal.js'
import GlobalStyles from './components/styled/Global.js'
import {Row} from './components/styled/row.styled.js'
import {StyledResultadosTexto} from './components/styled/StyledResultadosTexto.styled.js'
import {VerMaisDiv} from './components/styled/VerMaisDiv.styled.js'
import {StyledButton} from './components/Button/StyledButton.styled.js'
import { ThemeProvider } from 'styled-components' 

const apiUrl = 'https://api.spaceflightnewsapi.net/v3/articles?'

export default function App(){

  const [articles, setArticles] = useState([])
  const [searchText, setSearchText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalArticle, setModalArticle] = useState({})
  const [visible, setVisible] = useState(10)
  const[sort, setSort] = useState('')

  useEffect(()=> { 
        if(searchText) {
          fetch(`${apiUrl}title_contains=${searchText}&_limit=300`)
          .then((res) => res.json())
          .then((data) => setArticles(data))
        }else{
          fetch(`${apiUrl}&_limit=300`)
          .then((res) => res.json())
          .then((data) => setArticles(data))
        }
        return      
  },[searchText])

  const openModal =(flight)=> {
    setShowModal(prev => !prev)
    setModalArticle(flight)
  }

  const verMais =()=> {
    setVisible((prevValue)=> prevValue + 10)
  }

  const sortBy = (e)=> {
    setSort(e.target.value)
    const sorted = articles.sort((a, b) => {
        if(sort === 'Mais Novas') {
            return  parseInt(a.publishedAt.substring(0,4)) - parseInt(b.publishedAt.substring(0,4)) 
        }else if(sort === 'Mais Antigas') {
            return  parseInt(b.publishedAt.substring(0,4)) - parseInt(a.publishedAt.substring(0,4)) 
        }
    }) 
    setArticles(sorted)
  }

  const theme = {
      mobile: '768px',
      smallerDevices: '477px'
  }
  return(
    <ThemeProvider theme={theme}>
      <>
          <GlobalStyles />
          <Header searchText={searchText} setSearchText={setSearchText} sortBy={sortBy}/>
          <Row>    
            <section>
              {
               searchText && articles.length > 0 ? 
                    <StyledResultadosTexto>os resultados de "{searchText}"</StyledResultadosTexto> 
                :   

                searchText && articles.length === 0 ?
                    <StyledResultadosTexto>Nenhum resultado de <strong> "{searchText}" </strong> </StyledResultadosTexto>
                :  ''            
              }
              {
                articles.slice(0, visible).map(flight => (               
                  <Article key={flight.id}
                      openModal={openModal}
                      flight={flight}
                  />
                ))
                
              }
              <VerMaisDiv>
                    <StyledButton onClick={()=> verMais()}>Ver mais</StyledButton>
              </VerMaisDiv>
            </section>
            <Modal showModal={showModal} setShowModal={setShowModal} flight={modalArticle}/>
          </Row>
      </>
    </ThemeProvider>
  )
}