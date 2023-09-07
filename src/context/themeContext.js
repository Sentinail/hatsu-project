import React, { createContext, useContext, useState } from 'react'

export const themeContext = createContext()

export const useThemeContext = () => {
    return useContext(themeContext)
}

function ThemeContext({ children }) {
    const [ primaryColor, setPrimaryColor ] = useState("#2980b9")
    const [ secondaryColor, setSecondaryColor ] = useState("#121523")
    const [ tertiaryColor, setTertiaryColor ] = useState("#24B9D1")

    return (
        <themeContext.Provider value={{
                primaryColor, setPrimaryColor,
                secondaryColor, setSecondaryColor,
                tertiaryColor, setTertiaryColor,
            }}> 
            {children} 
        </themeContext.Provider>
    )
}

export default ThemeContext