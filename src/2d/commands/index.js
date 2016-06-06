import triangle from './triangle';
import ellipse from './ellipse';

export default (regl) => {
  return {
    triangle: triangle(regl),
    ellipse: ellipse(regl)
  };
};
