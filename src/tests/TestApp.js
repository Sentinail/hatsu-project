import React, { useContext } from 'react'
import { TestGlobalStyle } from './TestGlobalStyles'
import { themeContext } from '../context/themeContext'


const TestApp = () => {
    const { secondaryColor } = useContext(themeContext)

  return (
    <>
        <TestGlobalStyle $secondaryColor={secondaryColor}></TestGlobalStyle>
    </>
  )  
}

export default TestApp