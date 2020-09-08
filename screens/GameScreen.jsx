import React from 'react'
import { useSelector } from 'react-redux'

import StepOne from '../components/GameSteps/StepOne'
import StepTwo from '../components/GameSteps/StepTwo'
import StepThree from '../components/GameSteps/StepThree'


function GameScreen() {
    const step = useSelector(state => state.game.step);
    switch (step) {
        case 0:
            return <StepOne/>
        case 1:
            return <StepTwo/>
        case 2: 
            return <StepThree/>    
        default:
            break;
    }
}

export default GameScreen;
