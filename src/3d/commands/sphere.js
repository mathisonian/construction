const glslify = require('glslify');

export default (regl) => {
  return regl({
    vert: glslify('../shaders/sphere/vert.glsl'),
    frag: glslify('../shaders/sphere/frag.glsl'),
    attributes: {
      position: regl.prop('position'),
    },
    uniforms: {
      color: regl.prop('color')
    },
    count: 3
  });
}
