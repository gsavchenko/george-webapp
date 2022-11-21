export const useNodePointShaders = (): [string, string] => {
  const vertexShader = `
    attribute float size;
    
    void main() {
      // coordinate transformation
      vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
  
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = 5.0 + 10.0;
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
  `
  
  return [vertexShader, fragmentShader]
}
