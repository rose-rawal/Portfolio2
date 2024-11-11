import React, { Suspense, useRef } from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import Model from './Model.tsx'
function Scene() {
  
  return (
    <Canvas>
        <Model />
    </Canvas>
  )
}

export default Scene