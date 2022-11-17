import React, { useRef } from 'react'

import CubeBox from '../Model/cubeBox';

import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

const CubeBoxSample = () => {
  
  const boxRef = useRef(null);

  return(
    <>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(0,1,0)} diffuseColor={Color3.Yellow()}/>

        <CubeBox ref={boxRef} name='ground1' position={new Vector3(0,2,1)} diffuseColor={Color3.Green()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(0,3,2)} diffuseColor={Color3.Red()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(0,4,3)} diffuseColor={Color3.Blue()}/>

        <CubeBox ref={boxRef} name='ground1' position={new Vector3(1,2,0)} diffuseColor={Color3.Green()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(2,3,0)} diffuseColor={Color3.Red()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(3,4,0)} diffuseColor={Color3.Blue()}/>

        <CubeBox ref={boxRef} name='ground1' position={new Vector3(-1,2,0)} diffuseColor={Color3.Green()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(-2,3,0)} diffuseColor={Color3.Red()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(-3,4,0)} diffuseColor={Color3.Blue()}/>

        <CubeBox ref={boxRef} name='ground1' position={new Vector3(0,2,-1)} diffuseColor={Color3.Green()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(0,3,-2)} diffuseColor={Color3.Red()}/>
        <CubeBox ref={boxRef} name='ground1' position={new Vector3(0,4,-3)} diffuseColor={Color3.Blue()}/>
    </>
  )
}

export default CubeBoxSample;