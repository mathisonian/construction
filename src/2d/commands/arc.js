const glslify = require('glslify');

export default (regl) => {
  return regl({
    vert: glslify('../shaders/arc/vert.glsl'),
    frag: glslify('../shaders/arc/frag.glsl'),
    attributes: {
      position: regl.prop('position'),
    },
    uniforms: {
      angle: regl.prop('angle'),
      color: regl.prop('color'),
      size: regl.prop('size')
    },
    count: 1,
    primitive: 'points'
  });
}
