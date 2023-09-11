import React, { useContext } from 'react'
import { TestGlobalStyle } from './TestGlobalStyles'
import { themeContext } from '../context/themeContext'
import 'react-toastify/dist/ReactToastify.css'; 


const TestApp = () => {
    const { secondaryColor } = useContext(themeContext)

  return (
    <>
        <TestGlobalStyle $secondaryColor={secondaryColor}></TestGlobalStyle>
    </>
  )  
}

export default TestApp