precision mediump float;
uniform vec4 color;
uniform vec2 size;

float w, h, m, x, y, xa, ya;

void main() {
  w = size[0];
  h = size[1];
  m = max(w, h);

  w /= m;
  h /= m;

  x = gl_PointCoord.x;
  y = gl_PointCoord.y;

  xa = pow(x - 0.5, 2.0) / pow(w / 2.0, 2.0);
  ya = pow(y - 0.5, 2.0) / pow(h / 2.0, 2.0);

  if (xa + ya > 1.0) {
    discard;
  }
  gl_FragColor = color;
}
