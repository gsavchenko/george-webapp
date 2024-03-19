import React from 'react';
import { IUniform } from 'three';

interface RawShaderMaterialProps {
  options: {
    uniforms?: { [uniform: string]: IUniform };
    vertexShader?: string;
    fragmentShader?: string;
    transparent?: boolean;
    depthTest?: boolean;
    linewidth?: number;
  };
}

// RawShaderMaterialProps

/**
 * A material rendered with custom shaders. A shader is a small program written in GLSL that runs on the GPU.
 *
 * You may want to use a custom shader if you need to:
 * - implement an effect not included with any of the built-in materials
 * - combine many objects into a single BufferGeometry in order to improve performance
 *
 * Shader Material: https://threejs.org/docs/#api/en/materials/ShaderMaterial
 * Constructor Arguments: https://docs.pmnd.rs/react-three-fiber/api/objects#constructor-arguments
 *
 * @param {options} an object that is used as the constructor arguments of the ShaderMartial Three.js class.
 * @returns
 */
export const RawShaderMaterial = ({
  options,
}: RawShaderMaterialProps): JSX.Element => {
  return <rawShaderMaterial attach="material" args={[options]} />;
};
