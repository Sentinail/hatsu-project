import React, { useContext } from 'react'
import { TestGlobalStyle } from './TestGlobalStyles'
import { themeContext } from '../context/themeContext'
import 'react-toastify/dist/ReactToastify.css'; 
import { anilistGetAiringSchedules } from '../utilities/Anilist';


const TestApp = () => {
    const { secondaryColor } = useContext(themeContext)

  return (
    <>
        <TestGlobalStyle $secondaryColor={secondaryColor}></TestGlobalStyle>
        <button onClick={() => {anilistGetAiringSchedules(1, 2)}}> Click Me! </button>
    </>
  )  
}

export default TestApp