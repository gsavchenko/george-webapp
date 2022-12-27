import { useThree } from '@react-three/fiber';
import { RefObject, useCallback, useMemo } from 'react';
import { LineSegments, Points, Vector2, Vector3 } from 'three';

export const useNodeLines = (
  totalLines: number,
  linesRef: RefObject<LineSegments>,
  pointsRef: RefObject<Points>
): [Float32Array, Float32Array, () => void] => {
  // TODO: extract this camera logic into a single hook
  const camera = useThree((state) => state.viewport);

  const TOTAL_LINES = totalLines;
  const HEIGHT = camera.height;

  const R = new Vector2();
  const nodeOne = new Vector3();
  const nodeTwo = new Vector3();

  // const getViewSize = (camera) => {
  //   const fovInRadians = (camera.fov * Math.PI) / 180;
  //   const height = Math.abs(
  //     camera.position.z * Math.tan(fovInRadians / 2) * 2
  //   );
  R.set(HEIGHT * camera.aspect, HEIGHT);
  // }

  // create the initial line positions
  // each line has 2 vectors made up of 3 points each
  const linePositions = useMemo(() => {
    const positions = new Float32Array(TOTAL_LINES * 3 * 2);
    const linePointOne = new Vector3();
    const linePointTwo = new Vector3();

    for (let i = 0; i < TOTAL_LINES; i++) {
      linePointOne.set(0, 0, 0);
      linePointTwo.set(0, 0, 0);

      positions.set(
        [
          linePointOne.x,
          linePointOne.y,
          linePointOne.z,
          linePointTwo.x,
          linePointTwo.y,
          linePointTwo.z,
        ],
        i * 3 * 2
      );
    }

    return positions;
  }, [TOTAL_LINES]);

  // each lines has a single opacity vector representing the opacity on
  // either end of the line. 0 is transparent 1 is opaque.
  const lineOpacities = useMemo(() => {
    const opacities = new Float32Array(TOTAL_LINES * 2);
    const opacity = new Vector2();
    const TRANSPARENT = 0;

    for (let i = 0; i < TOTAL_LINES; i++) {
      opacity.set(TRANSPARENT, TRANSPARENT);
      opacities.set([opacity.x, opacity.y], i * 2);
    }

    return opacities;
  }, [TOTAL_LINES]);

  const updateLines = useCallback(() => {
    const totalNodePositions =
      pointsRef.current.geometry.attributes.position.count;
    let lineIndex = 0;

    // check distance between all points
    for (let i = 0; i < totalNodePositions; i++) {
      for (let j = i + 1; j < totalNodePositions; j++) {
        nodeOne.set(
          pointsRef.current.geometry.attributes.position.getX(i),
          pointsRef.current.geometry.attributes.position.getY(i),
          pointsRef.current.geometry.attributes.position.getZ(i)
        );
        nodeTwo.set(
          pointsRef.current.geometry.attributes.position.getX(j),
          pointsRef.current.geometry.attributes.position.getY(j),
          pointsRef.current.geometry.attributes.position.getZ(j)
        );

        const distance = nodeOne.distanceTo(nodeTwo);

        if (distance < R.y * 0.15) {
          linesRef.current.geometry.attributes.position.setXYZ(
            lineIndex * 2,
            nodeOne.x,
            nodeOne.y,
            nodeOne.z
          );
          linesRef.current.geometry.attributes.position.setXYZ(
            lineIndex * 2 + 1,
            nodeTwo.x,
            nodeTwo.y,
            nodeTwo.z
          );
          linesRef.current.geometry.attributes.opacity.setXY(
            lineIndex * 2,
            1.25 - distance,
            1.25 - distance
          );
          lineIndex++;
        }
      }
    }

    // hide lines that are not invisible and not connected to any node points
    for (
      let k = (lineIndex + 1) * 2;
      k < linesRef.current.geometry.attributes.position.count;
      k++
    ) {
      linesRef.current.geometry.attributes.position.setXYZ(k, 0, 0, 0);
    }

    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.opacity.needsUpdate = true;
  }, []);

  return [linePositions, lineOpacities, updateLines];
};
