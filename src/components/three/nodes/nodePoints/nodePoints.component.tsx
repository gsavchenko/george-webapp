import React, { RefObject } from 'react';
import { useNodePointShaders } from '../hooks';
import { Points } from 'three';
import {
  BufferAttribute,
  BufferGeometry,
  RawShaderMaterial,
} from '../../common';

interface NodePointsProps {
  pointsRef: RefObject<Points>;
  pointPositions: Float32Array;
  pointSizes: Float32Array;
}

export const NodePoints = ({
  pointsRef,
  pointPositions,
  pointSizes,
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
          <BufferAttribute
            attach="attributes-size"
            array={pointSizes}
            itemSize={1}
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
