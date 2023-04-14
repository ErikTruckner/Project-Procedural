import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sun = ({ position = [0, 0, 0], ...props }) => {
  const ref = useRef()

  useFrame((state, delta) => {
    // Rotate the sun
    ref.current.rotation.y += delta * 0.5
    ref.current.rotation.z += delta * 0.1
  })

  return (
    <mesh ref={ref} position={position} {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial color='yellow' />
    </mesh>
  )
}

export default Sun
