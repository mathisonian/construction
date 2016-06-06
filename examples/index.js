import Construction from '../src/2d';

console.log(Construction);

const c = new Construction();

c.rect({
  position: [0.5, 0.5],
  size: [0.25, 0.25],
  color: [1, 0.5, 0.25]
})

c.rect({
  position: [-0.5, -0.5],
  size: [0.25, 0.25],
  color: [0.75, 0.0, 0.25]
})
