import React, { useContext } from 'react'
import { TestGlobalStyle } from './TestGlobalStyles'
import { themeContext } from '../context/themeContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { StyledToastContainer } from '../styled-components/StyledToastContainer';


const TestApp = () => {
    const { secondaryColor, tertiaryColor } = useContext(themeContext)
    const notify = () => {
      toast('🦄 Wow so easy!');
    }


  return (
    <>
        <TestGlobalStyle $secondaryColor={secondaryColor}></TestGlobalStyle>
        <button onClick={notify}>Click Me!</button>
        <StyledToastContainer $tertiaryColor={tertiaryColor} className={"costum_toast"}
          position="bottom-right"
          autoClose={10000}
        />
    </>
  )  
}

export default TestApp