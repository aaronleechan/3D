import React from 'react'
import { Vector3 } from '@babylonjs/core';


const HemisphericLightComponent = () => {
  return(
    <>
        <hemisphericLight 
            name='light1' 
            intensity={0.7} 
            direction={Vector3.Up()} 
        /> 
    </>
  )
}

export default HemisphericLightComponent;