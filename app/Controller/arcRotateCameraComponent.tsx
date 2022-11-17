'use client';

import React from 'react'
import { Vector3 } from '@babylonjs/core';

interface archRotateCameraInterface {
    name: string;
    minZ: number;
    alpha: number;
    beta: number;
    radius: number;
    upperBetaLimit: number;
}

const ArchRotateCameraComponent = () => {
  return(
    <>
        <arcRotateCamera 
          name="arc" 
          target={Vector3.Zero()} 
          minZ={0.001}
          alpha={-Math.PI / 4} 
          beta={(Math.PI / 4)} 
          radius={5} 
          upperBetaLimit={(Math.PI / 2) * 0.99}
        />
    </>
  )
}

export default ArchRotateCameraComponent;