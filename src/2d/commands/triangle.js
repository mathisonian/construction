const glslify = require('glslify');

export default (regl) => {
  return regl({
    vert: glslify('../shaders/triangle/vert.glsl'),
    frag: glslify('../shaders/triangle/frag.glsl'),
    attributes: {
      position: regl.prop('position'),
    },
    uniforms: {
      color: regl.prop('color')
    },
    count: 3
  });
}
