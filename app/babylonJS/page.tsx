'use client';

import React, { useRef } from 'react'
import {
  Engine,
  Scene,
} from 'react-babylonjs';

import {
  ArchRotateCameraComponent,
  HemisphericLightComponent
} from '../Controller/index';

import  {
  GroundComponent
}  from '../Component/index';

import CubeBoxSample from '../babylonJS/cubeBoxSample';

const babylonJS = () => {

  return(
    <>
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
      <Scene>
        <ArchRotateCameraComponent />
        <HemisphericLightComponent />
        <GroundComponent>
          <CubeBoxSample/>
        </GroundComponent>
      </Scene>
    </Engine>
  </div>
</>
  )
}

export default babylonJS;