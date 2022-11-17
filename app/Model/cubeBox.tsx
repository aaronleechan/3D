import React, { useRef } from 'react';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

interface cubeBoxInterface {
    position: Vector3;
    ref: any
    name: string;
    diffuseColor: Color3;
}

const CubeBox = (props: cubeBoxInterface) : any =>{

    const { position, ref, name, diffuseColor} = props;

    return(
        <>
            <box ref={ref} position={position}>
                <standardMaterial name={name}  diffuseColor={diffuseColor}/>
            </box>
        </>
    )
}

export default CubeBox;