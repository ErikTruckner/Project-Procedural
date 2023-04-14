import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Stars } from '@react-three/drei'
// import Box from './Box'
// import Sun from './Sun'
import ShaderSun from './ShaderSun'
import { Perf } from 'r3f-perf'

export default function App() {
  console.log(Canvas)

  return (
    <Canvas>
      <Perf />
      <color args={['#000000']} attach='background' />
      <ShaderSun />
      <Stars />
      <OrbitControls />
    </Canvas>
  )
}
