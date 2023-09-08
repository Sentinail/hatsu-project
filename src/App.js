import React, { useContext } from 'react'
import StyleContext from './context/themeContext'
import GlobalStyle from './styled-components/GlobalStyle'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { themeContext } from './context/themeContext'


const App = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
  return (
      <>
        <StyleContext>
          <GlobalStyle $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}></GlobalStyle>
          <Header></Header>
          <main>
            <Outlet>

            </Outlet>
          </main>
          <Footer></Footer>
        </StyleContext>
      </>
  )
}

export default App