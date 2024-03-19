/**
 * This is a hook that returns the glsl shader code for the node lines.
 *
 * TODO: Investigate if there is a way to load the glsl code through webpack
 * without having it as a string in a template literal.
 *
 * This package looks promising: https://www.gatsbyjs.com/plugins/gatsby-plugin-glslify/?=glsl
 */
export const useNodeLineShaders = (): [string, string] => {
  const vertexShader = `
    attribute vec3 position;
    attribute float opacity;
    
    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;
    
    varying float vOpacity;
    
    void main(void) {
      // coordinate transformation
      vec4 mPosition = modelMatrix * vec4(position, 1.0);
    
      vOpacity = opacity;
    
      gl_Position = projectionMatrix * viewMatrix * mPosition;
    }
  `;

  const fragmentShader = `
    precision highp float;

    varying float vOpacity;
    
    void main() {
      vec3 color = vec3(0.1);
    
      gl_FragColor = vec4(color, vOpacity);
    }
  `;

  return [vertexShader, fragmentShader];
};
