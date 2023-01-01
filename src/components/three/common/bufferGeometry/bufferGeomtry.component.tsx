import React, { ReactNode } from 'react';

interface BufferGeometryProps {
  children: ReactNode;
}

/**
 * A representation of mesh, line, or point geometry.
 * Includes vertex positions, face indices, normals, colors,
 * UVs, and custom attributes within buffers, reducing the
 * cost of passing all this data to the GPU.
 *
 * More documentation: https://threejs.org/docs/#api/en/core/BufferGeometry
 */
export const BufferGeometry = ({
  children,
}: BufferGeometryProps): JSX.Element => {
  return <bufferGeometry>{children}</bufferGeometry>;
};
