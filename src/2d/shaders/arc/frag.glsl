#define M_PI 3.1415926535897932384626433832795

precision mediump float;
uniform vec4 color;
uniform vec2 angle;
uniform float size;

float x, y, theta;

void main() {
  x = gl_PointCoord.x - 0.5;
  y = gl_PointCoord.y - 0.5;

  // TODO: there is probably a smarter
  // way to put these into standard
  // mathematical coordinates
  theta = atan(y, x);
  theta += 2.0 * M_PI;
  if (theta > 2.0 * M_PI) {
    theta -= 2.0 * M_PI;
  }
  theta = 2.0 * M_PI - theta;

  if (length(gl_PointCoord.xy - 0.5) >= 0.5 || theta >= angle[1] || theta <= angle[0]) {
    discard;
  }

  gl_FragColor = color;
}
