precision mediump float;
uniform vec4 color;
uniform float width;
uniform float height;

void main() {
  if (length(gl_PointCoord.xy - 0.5) > 0.5) {
    discard;
  }
  gl_FragColor = color;
}
