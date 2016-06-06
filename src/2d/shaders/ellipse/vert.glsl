precision mediump float;
attribute vec2 position;
uniform float width;
uniform float height;

void main() {
  gl_PointSize = max(width, height);
  gl_Position = vec4(position, 0, 1);
}
