import { AttachType } from '@react-three/fiber/dist/declarations/src/core/renderer';
import React from 'react';

interface BufferAttributeProps {
  attach?: AttachType;
  array?: ArrayLike<number>;
  // Vertex attribute size must be 1, 2, 3, or 4.
  // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
  itemSize?: 1 | 2 | 3 | 4;
}

/**
 * This class stores data for an attribute (such as vertex positions, face indices,
 * normals, colors, UVs, and any custom attributes ) associated with a BufferGeometry,
 * which allows for more efficient passing of data to the GPU.
 *
 * More documentation:
 * - https://threejs.org/docs/#api/en/core/BufferAttribute
 * - https://docs.pmnd.rs/react-three-fiber/api/objects#attach
 *
 * @param attach Use attach to bind objects to their parent. If you unmount the attached object it will be taken off its parent automatically.
 * @param array The array holding data stored in the buffer.
 * @param itemSize The length of vectors that are being stored in the array.
 */
export const BufferAttribute = ({
  attach,
  array,
  itemSize,
}: BufferAttributeProps): JSX.Element => {
  return (
    <bufferAttribute
      attach={attach}
      count={array.length / itemSize}
      array={array}
      itemSize={itemSize}
    />
  );
};
