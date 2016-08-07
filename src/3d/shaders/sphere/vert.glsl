precision mediump float;
attribute vec2 position;
uniform vec2 size;

void main() {
  gl_PointSize = max(size.x, size.y) * 2.0;
  gl_Position = vec4(position, 0, 1);
}
