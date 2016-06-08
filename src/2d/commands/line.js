const glslify = require('glslify');

export default (regl) => {
  return regl({
    vert: glslify('../shaders/line/vert.glsl'),
    frag: glslify('../shaders/line/frag.glsl'),
    attributes: {
      position: regl.prop('position'),
    },
    uniforms: {
      color: regl.prop('color')
    },
    count: 2,
    primitive: 'lines'
  });
}
