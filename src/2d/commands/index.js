import triangle from './triangle';
import ellipse from './ellipse';
import line from './line';
import arc from './arc';

export default (regl) => {
  return {
    triangle: triangle(regl),
    ellipse: ellipse(regl),
    line: line(regl),
    arc: arc(regl)
  };
};
