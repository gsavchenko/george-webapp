import React, { useMemo, useRef } from 'react';
import { ThreeElements, useThree, useFrame } from '@react-three/fiber';
import { useNodePoints, useNodePointShaders } from './hooks';
import { Points } from 'three';

export const NodePoints: React.FC<ThreeElements['mesh']> = (props) => {
  // setup material
  const [vertexShader, fragmentShader] = useNodePointShaders();
  const nodePointsMaterial = useMemo(
    () => ({
      uniforms: {
        u_time: {
          type: 'f',
          value: 0,
        },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      depthTest: false,
    }),
    []
  );

  // This reference gives us direct access to our points
  const NUM_POINTS = 80;
  const pointsRef = useRef(null); // TODO: Add Points type to ref
  const camera = useThree((state) => state.viewport);

  const [particlePositions, particleVelocities, updatePositions] =
    useNodePoints(80, pointsRef);

  const height = camera.height;
  const width = height * camera.aspect;

  useFrame((state) => {
    for (let i = 0; i < NUM_POINTS; i++) {
      const i3 = i * 3;

      // pointsRef.current.geometry.attributes.position.array[i3] +=
      //   particleVelocities[i3];
      // pointsRef.current.geometry.attributes.position.array[i3 + 1] +=
      //   particleVelocities[i3 + 1];

      // updatePositions();

      // right
      if (
        pointsRef.current.geometry.attributes.position.array[i3] >
        width / 2 + 2
      ) {
        pointsRef.current.geometry.attributes.position.array[i3] =
          -width / 2 - 1;
        pointsRef.current.geometry.attributes.position.array[i3 + 1] =
          Math.random() * height - height / 2;
      }

      // left
      if (
        pointsRef.current.geometry.attributes.position.array[i3] <
        -width / 2 - 2
      ) {
        pointsRef.current.geometry.attributes.position.array[i3] =
          width / 2 + 1;
        pointsRef.current.geometry.attributes.position.array[i3 + 1] =
          Math.random() * height - height / 2;
      }

      // top
      if (
        pointsRef.current.geometry.attributes.position.array[i3 + 1] >
        height / 2 + 2
      ) {
        pointsRef.current.geometry.attributes.position.array[i3] =
          Math.random() * width - width / 2;
        pointsRef.current.geometry.attributes.position.array[i3 + 1] =
          -height / 2 - 1;
      }

      // bottom
      if (
        pointsRef.current.geometry.attributes.position.array[i3 + 1] <
        -height / 2 - 2
      ) {
        pointsRef.current.geometry.attributes.position.array[i3] =
          Math.random() * width - width / 2;
        pointsRef.current.geometry.attributes.position.array[i3 + 1] =
          height / 2 + 1;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial attach="material" args={[nodePointsMaterial]} />
    </points>
  );
};
