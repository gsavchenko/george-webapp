import { useThree } from '@react-three/fiber';
import { RefObject, useCallback, useMemo } from 'react';
import { Points, Vector3 } from 'three';

export const useNodePoints = (
  totalPoints: number,
  pointsRef: RefObject<Points>
): [Float32Array, () => void] => {
  // TODO: extract this camera logic into a single hook
  const camera = useThree((state) => state.viewport);

  const TOTAL_POINTS = totalPoints;
  const HEIGHT = camera.height;
  const WIDTH = HEIGHT * camera.aspect;

  // create the initial point positions
  // each point has 1 vector made up of 3 points
  const particlePosition = useMemo(() => {
    const positions = new Float32Array(TOTAL_POINTS * 3);
    const position = new Vector3();
    const getRandomPointOnScreen = () => Math.random() * WIDTH - WIDTH / 2;

    for (let i = 0; i < TOTAL_POINTS; i++) {
      position.set(getRandomPointOnScreen(), getRandomPointOnScreen(), 0);

      // We add the 3 values to the attribute array for every loop
      positions.set([position.x, position.y, position.z], i * 3);
    }

    return positions;
  }, [TOTAL_POINTS]);

  const nodePointVelocities = useMemo(() => {
    const velocities = new Float32Array(TOTAL_POINTS * 3);
    const velocity = new Vector3();
    const getRandomVelocity = () => Math.random() * (0.02 - -0.02) + -0.02;

    for (let i = 0; i < TOTAL_POINTS; i++) {
      velocity.set(getRandomVelocity(), getRandomVelocity(), 0);

      // We add the 3 values to the attribute array for every loop
      velocities.set([velocity.x, velocity.y, velocity.z], i * 3);
    }

    return velocities;
  }, [TOTAL_POINTS]);

  const updateNodes = useCallback(() => {
    const currentPosition = new Vector3();
    const updatedPosition = new Vector3();

    // accelerate nodes at a constant rate
    for (let i = 0; i < TOTAL_POINTS; i++) {
      currentPosition.set(
        pointsRef.current.geometry.attributes.position.getX(i),
        pointsRef.current.geometry.attributes.position.getY(i),
        pointsRef.current.geometry.attributes.position.getZ(i)
      );

      updatedPosition.set(
        currentPosition.x + nodePointVelocities[i * 3],
        currentPosition.y + nodePointVelocities[i * 3 + 1],
        currentPosition.z + nodePointVelocities[i * 3 + 2]
      );

      pointsRef.current.geometry.attributes.position.setXYZ(
        i,
        updatedPosition.x,
        updatedPosition.y,
        updatedPosition.z
      );
    }

    // detect when a node goes off screen and update the position
    for (let i = 0; i < TOTAL_POINTS; i++) {
      // const i3 = i * 3;

      // right
      if (
        pointsRef.current.geometry.attributes.position.getX(i) >
        WIDTH / 2 + 2
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          -WIDTH / 2 - 1,
          Math.random() * HEIGHT - HEIGHT / 2,
          0
        );
      }
      // left
      if (
        pointsRef.current.geometry.attributes.position.getX[i] <
        -WIDTH / 2 - 2
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          WIDTH / 2 + 1,
          Math.random() * HEIGHT - HEIGHT / 2,
          0
        );
      }
      // top
      if (
        pointsRef.current.geometry.attributes.position.getY(i) >
        HEIGHT / 2 + 2
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          Math.random() * WIDTH - WIDTH / 2,
          -HEIGHT / 2 - 1,
          0
        );
      }
      // bottom
      if (
        pointsRef.current.geometry.attributes.position.getY(i) <
        -HEIGHT / 2 - 2
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          Math.random() * WIDTH - WIDTH / 2,
          HEIGHT / 2 + 1,
          0
        );
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }, []);

  return [particlePosition, updateNodes];
};
