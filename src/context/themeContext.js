import React, { createContext, useState } from 'react'

export const themeContext = createContext()

function ThemeContext({ children }) {
    const [ primaryColor, setPrimaryColor ] = useState("#2980b9")
    const [ secondaryColor, setSecondaryColor ] = useState("#34495e")
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