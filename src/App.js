import React, { useContext } from 'react'
import StyleContext from './context/themeContext'
import GlobalStyle from './styled-components/GlobalStyle'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { themeContext } from './context/themeContext'
import { StyledToastContainer } from './styled-components/StyledToastContainer'
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)

  return (
      <>
        <StyleContext>
          <GlobalStyle $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}></GlobalStyle>
          <Header></Header>
          <StyledToastContainer $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor} className={"costum_toast"}
            position="bottom-right"
            autoClose={3000}
          />
          <main>
            <Outlet>

            </Outlet>
          </main>
        </StyleContext>
      </>
  )
}

export default App