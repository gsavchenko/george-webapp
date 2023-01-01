import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { LineSegments, Points } from 'three';
import { NodeLines, useNodeLines } from './nodeLines';
import { useNodePoints } from './nodePoints';
import { NodePoints } from './nodePoints/nodePoints.component';

export const Nodes = (): JSX.Element => {
  const pointsRef = useRef<Points>(null);
  const linesRef = useRef<LineSegments>(null);

  const { nodePointPositions, nodePointSizes, updateNodePoints } =
    useNodePoints(80, pointsRef);
  const [linePositions, lineOpacities, updateLines] = useNodeLines(
    400,
    linesRef,
    pointsRef
  );

  useFrame((state) => {
    updateNodePoints();
    updateLines();
  });

  return (
    <>
      <NodePoints
        pointsRef={pointsRef}
        pointPositions={nodePointPositions}
        pointSizes={nodePointSizes}
      />
      <NodeLines
        linesRef={linesRef}
        lineOpacities={lineOpacities}
        linePositions={linePositions}
      />
    </>
  );
};
