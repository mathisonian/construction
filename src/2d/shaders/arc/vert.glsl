precision mediump float;
attribute vec2 position;
uniform float size;

void main() {
  gl_PointSize = size * 2.0;
  gl_Position = vec4(position, 0, 1);
}
