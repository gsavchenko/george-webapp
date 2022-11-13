import React, { useMemo, useRef } from 'react';
import { ThreeElements, useThree, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

const SphereShaderMaterial = {
  uniforms: {
    u_time: { type: 'f', value: 0 },
  },
  vertexShader: `
    precision mediump float;
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float u_time;

    void main() {
      vec2 uv = vUv;
      float cb = floor((uv.x + u_time)*20.) + floor((uv.y + u_time)*20.);
      gl_FragColor = vec4(1.,0.,0.,mod(cb, 2.0));
    }
  `,
};

const ShaderSphere: React.FC<ThreeElements['mesh']> = (props) => {
  const sphereRef = useRef(null);

  useFrame(({ clock }) => {
    sphereRef.current.material.uniforms.u_time.value = clock.oldTime * 0.00005;
  });

  return (
    <mesh ref={sphereRef} {...props}>
      <sphereGeometry args={[2, 24, 24]} />
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </mesh>
  );
};

export const NodePoints: React.FC<ThreeElements['mesh']> = (props) => {
  // This reference gives us direct access to our points
  const points = useRef();
  const count = 80;
  const camera = useThree((state) => state.viewport);

  const height = camera.height;
  const width = height * camera.aspect;

  const particlesPosition = useMemo(() => {
    // Create a Float32Array of count*3 length
    // -> we are going to generate the x, y, and z values for 2000 particles
    // -> thus we need 6000 items in this array
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Generate random values for x, y, and z on every loop
      let x = Math.random() * (width * 2) - width;
      let y = Math.random() * (height * 2) - height;

      // We add the 3 values to the attribute array for every loop
      positions.set([x, y, 0], i * 3);
    }

    return positions;
  }, [count]);

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <instancedBufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </instancedBufferGeometry>
      {/* <pointsMaterial color="#5786F5" size={0.15} sizeAttenuation /> */}
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </points>
  );
};
