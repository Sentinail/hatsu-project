import React from 'react'
import { BurgerContainer } from '../styled-components/BurgerContainer';

function Burger({ size, isActive, onClick}) {

    return (
        <BurgerContainer $size={size} $isActive={isActive} onClick={onClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </BurgerContainer>
    );
}

export default Burger;