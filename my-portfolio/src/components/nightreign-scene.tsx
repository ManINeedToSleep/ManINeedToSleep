"use client"

import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef, useMemo, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function CodeParticles() {
  const points = useRef<THREE.Points>(null!)
  const particleCount = 500

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      // Tech-inspired colors: blues, greens, and whites
      const color = new THREE.Color()
      const hue = Math.random() > 0.5 ? 0.6 : 0.5 // Blue or green
      color.setHSL(hue, 0.7, 0.4 + Math.random() * 0.4)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [particleCount])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.03
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.6} />
    </points>
  )
}

function FloatingTechOrbs() {
  const orb1 = useRef<THREE.Mesh>(null!)
  const orb2 = useRef<THREE.Mesh>(null!)
  const orb3 = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (orb1.current) {
      orb1.current.position.y = Math.sin(time * 0.4) * 2
      orb1.current.position.x = Math.cos(time * 0.2) * 3
    }

    if (orb2.current) {
      orb2.current.position.y = Math.cos(time * 0.6) * 1.5
      orb2.current.position.z = Math.sin(time * 0.3) * 2
    }

    if (orb3.current) {
      orb3.current.position.x = Math.sin(time * 0.5) * 2.5
      orb3.current.position.z = Math.cos(time * 0.7) * 1.8
    }
  })

  return (
    <>
      <mesh ref={orb1} position={[5, 0, -5]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} transparent opacity={0.6} />
      </mesh>
      <mesh ref={orb2} position={[-3, 2, 3]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} transparent opacity={0.7} />
      </mesh>
      <mesh ref={orb3} position={[2, -1, 4]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.15} transparent opacity={0.5} />
      </mesh>
    </>
  )
}

function DataStream() {
  const stream = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (stream.current) {
      const time = state.clock.elapsedTime
      stream.current.visible = Math.sin(time * 8) > 0.3
      ;(stream.current.material as THREE.MeshBasicMaterial).opacity = Math.random() * 0.6 + 0.2
    }
  })

  return (
    <mesh ref={stream} position={[8, 5, -10]} rotation={[0, 0, Math.PI / 6]}>
      <planeGeometry args={[0.05, 6]} />
      <meshBasicMaterial color="#60a5fa" transparent />
    </mesh>
  )
}

export function TechScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ pointerEvents: "none" }}>
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#10b981" />

      <Stars radius={100} depth={50} count={800} factor={3} saturation={0.3} fade speed={1} />
      <CodeParticles />
      <FloatingTechOrbs />
      <DataStream />
    </Canvas>
  )
}
