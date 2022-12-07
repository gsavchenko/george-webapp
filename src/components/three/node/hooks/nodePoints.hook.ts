import { useThree } from '@react-three/fiber';
import { RefObject, useCallback, useMemo } from 'react';
import { Points } from 'three';

export const useNodePoints = (
  totalPoints: number,
  pointsRef: RefObject<Points>
): [Float32Array, Float32Array, () => void] => {
  const camera = useThree((state) => state.viewport);

  const TOTAL_POINTS = totalPoints;
  const HEIGHT = camera.height;
  const WIDTH = HEIGHT * camera.aspect;

  // Create a Float32Array of TOTAL_POINTS * 3 length
  // we are going to generate the x, y, and z values for TOTAL_POINTS particles
  const particlePosition = useMemo(() => {
    const positions = new Float32Array(TOTAL_POINTS * 3);

    for (let i = 0; i < TOTAL_POINTS; i++) {
      const x = Math.random() * WIDTH - WIDTH / 2;
      const y = Math.random() * HEIGHT - HEIGHT / 2;
      const z = 0;

      // We add the 3 values to the attribute array for every loop
      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [TOTAL_POINTS]);

  const particleVelocities = useMemo(() => {
    const velocities = new Float32Array(TOTAL_POINTS * 3);

    for (let i = 0; i < TOTAL_POINTS; i++) {
      const x = Math.random() * (0.05 - -0.05) + -0.05;
      const y = Math.random() * (0.05 - -0.05) + -0.05;
      const z = 0;

      // We add the 3 values to the attribute array for every loop
      velocities.set([x, y, z], i * 3);
    }

    return velocities;
  }, [TOTAL_POINTS]);

  const updatePositions = useCallback(() => {
    for (let i = 0; i < TOTAL_POINTS; i++) {
      const i3 = i * 3;

      const positionX =
        pointsRef.current.geometry.attributes.position.array[i3];
      const updatedPositionX = positionX + particleVelocities[i3];
      const positionY =
        pointsRef.current.geometry.attributes.position.array[i3 + 1];
      const updatedPositionY = positionY + particleVelocities[i3 + 1];

      pointsRef.current.geometry.attributes.position.setX(i3, updatedPositionX);
      pointsRef.current.geometry.attributes.position.setY(
        i3 + 1,
        updatedPositionY
      );
    }
  }, []);

  return [particlePosition, particleVelocities, updatePositions];
};
