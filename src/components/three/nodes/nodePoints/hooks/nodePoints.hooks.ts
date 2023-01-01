import { useThree } from '@react-three/fiber';
import { RefObject, useCallback, useMemo } from 'react';
import { Points, Vector3 } from 'three';

export const useNodePoints = (
  totalPoints: number,
  pointsRef: RefObject<Points>
): {
  nodePointPositions: Float32Array;
  nodePointSizes: Float32Array;
  updateNodePoints: () => void;
} => {
  // TODO: extract this camera logic into a single hook
  const camera = useThree((state) => state.viewport);

  const TOTAL_POINTS = totalPoints;
  const HEIGHT = camera.height;
  const WIDTH = HEIGHT * camera.aspect;

  // create the initial point positions
  // each point has 1 vector made up of 3 points
  const nodePointPositions = useMemo(() => {
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

  const nodePointSizes = useMemo(() => {
    const sizes = new Float32Array(TOTAL_POINTS * 3);
    const getRandomSize = () => Math.random() * (5 - -1) + -1;

    for (let i = 0; i < TOTAL_POINTS; i++) {
      // console.log(getRandomSize());
      // We add the 3 values to the attribute array for every loop
      sizes.set([getRandomSize()], i);
    }

    return sizes;
  }, [TOTAL_POINTS]);

  const updateNodePoints = useCallback(() => {
    const currentPosition = new Vector3();
    const updatedPosition = new Vector3();
    const OUTER_BOUNDING_BOX = {
      top: 2,
      bottom: 2,
      left: 2,
      right: 2,
    };
    const INNER_BOUNDING_BOX = {
      top: 1,
      bottom: 1,
      left: 1,
      right: 1,
    };

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
    // assuming 0,0 is the centre of the screen and box
    for (let i = 0; i < TOTAL_POINTS; i++) {
      // right
      if (
        pointsRef.current.geometry.attributes.position.getX(i) >
        WIDTH / 2 + OUTER_BOUNDING_BOX.right
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          -WIDTH / 2 - INNER_BOUNDING_BOX.left,
          Math.random() * HEIGHT - HEIGHT / 2,
          0
        );
      }
      // left
      if (
        pointsRef.current.geometry.attributes.position.getX(i) <
        -WIDTH / 2 - OUTER_BOUNDING_BOX.left
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          WIDTH / 2 + OUTER_BOUNDING_BOX.right,
          Math.random() * HEIGHT - HEIGHT / 2,
          0
        );
      }
      // top
      if (
        pointsRef.current.geometry.attributes.position.getY(i) >
        HEIGHT / 2 + OUTER_BOUNDING_BOX.top
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          Math.random() * WIDTH - WIDTH / 2,
          -HEIGHT / 2 - INNER_BOUNDING_BOX.bottom,
          0
        );
      }
      // bottom
      if (
        pointsRef.current.geometry.attributes.position.getY(i) <
        -HEIGHT / 2 - OUTER_BOUNDING_BOX.bottom
      ) {
        pointsRef.current.geometry.attributes.position.setXYZ(
          i,
          Math.random() * WIDTH - WIDTH / 2,
          HEIGHT / 2 + INNER_BOUNDING_BOX.top,
          0
        );
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }, []);

  return { nodePointPositions, nodePointSizes, updateNodePoints };
};
