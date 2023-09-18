import React, { useContext } from 'react'
import { BlueButtonContainer } from '../styled-components/BlueButtonContainer'
import { themeContext } from '../context/themeContext'

const BlueButton = ({ type = "", className = "", children, isDisabled = false, onClick, ...props }) => {
    const { tertiaryColor } = useContext(themeContext);

    return (
        <BlueButtonContainer
            type={type}
            className={className}
            onClick={onClick}
            disabled={isDisabled}
            $tertiaryColor={tertiaryColor}
            {...props}
        >
            {children}
        </BlueButtonContainer>
    );
};


export default BlueButton