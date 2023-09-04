import React, { useContext } from 'react'
import { TestGlobalStyle } from './TestGlobalStyles'
import { themeContext } from '../context/themeContext'
import PopularAnimeSections from './PopularAnimeSections'


const TestApp = () => {
    const { secondaryColor } = useContext(themeContext)

  return (
    <>
        <TestGlobalStyle $secondaryColor={secondaryColor}></TestGlobalStyle>
        <main>
            <PopularAnimeSections></PopularAnimeSections>
        </main>
    </>
  )  
}

export default TestApp