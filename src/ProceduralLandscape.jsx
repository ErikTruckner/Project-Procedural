import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshDistortMaterial } from '@react-three/drei'

const ProceduralLandscape = ({
  width = 100,
  height = 100,
  segments = 128,
  peakHeight = 2,
  valleyHeight = -2,
}) => {
  const terrain = new THREE.PlaneGeometry(width, height, segments, segments)

  const positionAttribute = terrain.getAttribute('position')

  const min = new THREE.Vector3(-width / 2, valleyHeight, -height / 2)
  const max = new THREE.Vector3(width / 2, peakHeight, height / 2)

  for (let i = 0; i < positionAttribute.count; i++) {
    const y = THREE.MathUtils.lerp(min.y, max.y, Math.random())
    positionAttribute.setY(i, y)
  }

  positionAttribute.needsUpdate = true

  terrain.computeVertexNormals()

  return (
    <mesh>
      <primitive object={terrain} attach='geometry' />
      <meshPhongMaterial color={0x66c2ff} />
    </mesh>
  )
}

export default ProceduralLandscape
