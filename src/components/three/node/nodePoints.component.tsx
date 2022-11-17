import React, { useMemo, useRef } from 'react';
import { ThreeElements, useThree, useFrame, extend } from '@react-three/fiber';
import { Color } from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
// import fs from './nodePoints.fs';

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

const SphereShaderMaterial2 = {
  uniforms: {
    u_time: {
      type: 'f',
      value: 0,
    },
  },
  vertexShader: `
  attribute float size;
  
  void main() {
    // coordinate transformation
    vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
  
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 5.0 + 10.0;
  }
  `,
  fragmentShader: `
  precision highp float;

  void main() {
    // Convert PointCoord to the other vec2 has a range from -1.0 to 1.0.
    vec2 p = gl_PointCoord * 2.0 - 1.0;
  
    // Draw circle
    float radius = length(p);
    float opacity = (1.0 - smoothstep(0.9, 1.0, radius));
  
    vec3 color = vec3(0.1);
  
    gl_FragColor = vec4(color, opacity);
  }
  `,
  transparent: true,
  depthTest: false,
};

// const PointsMaterialTest = shaderMaterial(
//   { time: 0, color: new Color(0.2, 0.0, 0.1) },
//   // vertex shader
//   glsl`
//     varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//   // fragment shader
//   glsl`
//     uniform float time;
//     uniform vec3 color;
//     varying vec2 vUv;
//     void main() {
//       gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
//     }
//   `
// );

// extend({ PointsMaterialTest });

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
  const points = useRef(null);
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
      let x = Math.random() * width - width / 2;
      let y = Math.random() * height - height / 2;

      // We add the 3 values to the attribute array for every loop
      positions.set([x, y, 0], i * 3);
    }

    return positions;
  }, [count]);

  const particlesVelocities = useMemo(() => {
    // Create a Float32Array of count*3 length
    // -> we are going to generate the x, y, and z values for 2000 particles
    // -> thus we need 6000 items in this array
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Generate random values for x, y, and z on every loop
      let x = Math.random() * width - width / 2;
      let y = Math.random() * height - height / 2;

      // We add the 3 values to the attribute array for every loop
      positions.set([x, y, 0], i * 3);
    }

    return positions;
  }, [count]);

  const acc = () => {
    let arr = [];

    for (let i = 0; i < count; i++) {
      const a = Math.random() * (0.05 - -0.05) + -0.05;
      arr.push(a);
    }

    return arr;
  };

  const speeds = acc();
  const speeds2 = acc();

  useFrame((state) => {
    const { clock } = state;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      points.current.geometry.attributes.position.array[i3] += speeds[i3];
      points.current.geometry.attributes.position.array[i3 + 1] += speeds2[i3];

      // points.current.geometry.attributes.position.array[i3] +=
      //   Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
      // points.current.geometry.attributes.position.array[i3 + 1] +=
      //   Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;
      // points.current.geometry.attributes.position.array[i3 + 2] +=
      //   Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-acceralation"
          count={particlesVelocities.length / 3}
          array={particlesVelocities}
          itemSize={3}
        />
      </bufferGeometry>
      {/* <pointsMaterial
        color="#5786F5"
        size={0.15}
        sizeAttenuation
        args={[SphereShaderMaterial2]}
      /> */}
      <shaderMaterial attach="material" args={[SphereShaderMaterial2]} />
    </points>
  );
};
