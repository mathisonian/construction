precision mediump float;
uniform vec4 color;
uniform vec2 angle;
uniform float size;

float x, y, a;

void main() {
  x = gl_PointCoord.x - 0.5;
  y = gl_PointCoord.y - 0.5;
  a = atan(y, x) + 3.14159;
  if (length(gl_PointCoord.xy - 0.5) > 0.5 || a > angle[1] || a < angle[0]) {
    discard;
  }
  gl_FragColor = color;
}
