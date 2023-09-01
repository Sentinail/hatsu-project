import React, { useState, useEffect, useRef } from 'react'
import { QualityButtonContainer } from '../styled-components/QualityButtonContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'; 
import { QualityContainer } from '../styled-components/QualityContainer';

const CostumQualityButton = ({ qualityOptions, setCurrentIndex, sources }) => {
    const [ isActive, setIsActive ] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const handleQualityChange = (index) => {
        setCurrentIndex(index)
    }

    return (
        <QualityButtonContainer $isActive={isActive} onClick={handleClick}>
            <FontAwesomeIcon className='cog_icon' icon={faCog} style={{color: "#ffffff"}} size='lg' />
            <QualityContainer $isActive={isActive}>
                { sources.map((source, index) => {
                    return <button className='quality_options' key={index} onClick={() => {handleQualityChange(index)}}> { source.quality } </button>
                })}
            </QualityContainer>
        </QualityButtonContainer>
    )
}

export default CostumQualityButton