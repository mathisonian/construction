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
      width: regl.prop('width'),
      height: regl.prop('height'),
    },
    count: 1,
    primitive: 'points'
  });
}
