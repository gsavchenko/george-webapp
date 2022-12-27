import React, { RefObject } from 'react';
import { useNodePointShaders } from '../hooks';
import { Points } from 'three';
import {
  BufferAttribute,
  BufferGeometry,
  RawShaderMaterial,
} from '../../common';

interface NodePointsProps {
  pointPositions: Float32Array;
  pointsRef: RefObject<Points>;
}

export const NodePoints = ({
  pointPositions,
  pointsRef,
}: NodePointsProps): JSX.Element => {
  const [pointVertexShader, pointFragmentShader] = useNodePointShaders();

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <>
      <points ref={pointsRef}>
        <BufferGeometry>
          <BufferAttribute
            attach="attributes-position"
            array={pointPositions}
            itemSize={3}
          />
        </BufferGeometry>
        <RawShaderMaterial
          options={{
            uniforms: {
              u_time: {
                value: 0,
              },
            },
            vertexShader: pointVertexShader,
            fragmentShader: pointFragmentShader,
            transparent: true,
            depthTest: false,
          }}
        />
      </points>
    </>
  );
};
