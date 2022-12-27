import React, { RefObject } from 'react';
import { LineSegments } from 'three';
import { BufferAttribute, RawShaderMaterial } from '../../common';
import { BufferGeometry } from '../../common/bufferGeometry/bufferGeomtry.component';
import { useNodeLineShaders } from './hooks';

interface NodeLinesProps {
  linePositions: Float32Array;
  lineOpacities: Float32Array;
  linesRef: RefObject<LineSegments>;
}

export const NodeLines = ({
  linePositions,
  lineOpacities,
  linesRef,
}: NodeLinesProps): JSX.Element => {
  const [vertexShader, fragmentShader] = useNodeLineShaders();

  return (
    <lineSegments ref={linesRef}>
      <BufferGeometry>
        <BufferAttribute
          attach="attributes-position"
          array={linePositions}
          itemSize={3}
        />
        <BufferAttribute
          attach="attributes-opacity"
          array={lineOpacities}
          itemSize={1}
        />
      </BufferGeometry>

      <RawShaderMaterial
        options={{
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          transparent: true,
          depthTest: false,
          linewidth: 1,
        }}
      />
    </lineSegments>
  );
};
