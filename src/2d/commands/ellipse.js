const glslify = require('glslify');

export default (regl) => {
  return regl({
    vert: glslify('../shaders/ellipse/vert.glsl'),
    frag: glslify('../shaders/ellipse/frag.glsl'),
    attributes: {
      position: regl.prop('position'),
    },
    uniforms: {
      color: regl.prop('color'),
      size: regl.prop('size')
    },
    count: 1,
    primitive: 'points'
  });
}
