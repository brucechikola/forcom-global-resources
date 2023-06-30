import { OrbitControls, useGLTF } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={2.3}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {

  return (
    <Canvas
      Shadows
      frameLoop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 250,
        position: [-4, 3, 6]
      }}
    >
      <OrbitControls
        autoRotate={true}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
    </Canvas>
  )
}
export default EarthCanvas