import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const ShaderSun = (props) => {
  const sunRef = useRef()

  const textureLoader = new TextureLoader()
  const sunTexture = textureLoader.load('/public/sun.jpg')

  useFrame(() => {
    sunRef.current.rotation.y += 0.002
  })

  return (
    <mesh {...props} ref={sunRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  )
}

export default ShaderSun
