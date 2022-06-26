import React from 'react'
//three js 
import { Canvas } from '@react-three/fiber'

const Scene = ({ children }) =>{
  return (
    <>
        <Canvas style={{height : '100vh'}}>
            { children }
        </Canvas>
    </>
  )
}

export default Scene