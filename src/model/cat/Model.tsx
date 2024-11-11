import React, { useRef } from 'react'
import {useGLTF} from '@react-three/drei';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import * as Three from 'three';

useGLTF.preload('/cat_dispenser.glb')
function Model() {
    const myRef=useRef<Three.Object3D>();

  useFrame(()=>{
    if(myRef?.current){
      myRef.current.rotation.y+=0.01;
      myRef.current.rotation.z+=0.01;
    }
  })
    const {nodes,materials,animations,scene}=useGLTF('/cat_dispenser.glb')
  return <primitive object={scene} ref={myRef}/>
}

export default Model