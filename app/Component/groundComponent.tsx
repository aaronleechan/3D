import React, { useRef } from 'react';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import CubeBox from '../Model/cubeBox';

const GroundComponent = (props: any) : any =>{

    const { children } = props;

    return(
        <ground name='ground1' width={6} height={6} subdivisions={2}>
            {children}
        </ground>
    )
}

export default GroundComponent;