import React, { useContext } from 'react'
import { BlueButtonContainer } from '../styled-components/BlueButtonContainer'
import { themeContext } from '../context/themeContext'

const BlueButton = ({ className="", children, isDisabled=false, onClick }) => {
    const { tertiaryColor } = useContext(themeContext)

    return (
        <BlueButtonContainer className={className} onClick={onClick} disabled={isDisabled} $tertiaryColor={tertiaryColor}>
            { children }
        </BlueButtonContainer>
    )
}

export default BlueButton