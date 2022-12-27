/**
 * This is a hook that returns the glsl shader code for the node points.
 *
 * TODO: Investigate if there is a way to load the glsl code through webpack
 * without having it as a string in a template literal.
 *
 * This package looks promising: https://www.gatsbyjs.com/plugins/gatsby-plugin-glslify/?=glsl
 */
export const useNodePointShaders = (): [string, string] => {
  const vertexShader = `
    attribute vec3 position;
    attribute float size;
    
    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;
    
    void main() {
      // coordinate transformation
      vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = 15.0 + size;
    }
  `;

  const fragmentShader = `
    precision highp float;

    void main() {
      // Convert PointCoord to the other vec2 has a range from -1.0 to 1.0.
      vec2 p = gl_PointCoord * 2.0 - 1.0;
    
      // Draw circle
      float radius = length(p);
      float opacity = (1.0 - smoothstep(0.9, 1.0, radius));
    
      vec3 color = vec3(0.1);
    
      gl_FragColor = vec4(color, opacity);
    }
  `;

  return [vertexShader, fragmentShader];
};
