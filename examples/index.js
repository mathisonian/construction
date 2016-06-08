import Construction from '../src/2d';

const c = new Construction();

c.frame((count) => {
  c.background({
    color: [1, 1, Math.abs(Math.sin(count / 100)), 1],
  })

  // TODO - need to unify the way that sizes are handled

  c.rect({
    position: [-0.5, -0.5],
    size: [0.25, 0.25], // in webgl space
    color: [0.75, Math.abs(Math.sin(count / 100)), 0.25, 1]
  })


  c.ellipse({
    position: [(count % 1000 - 500) / 500, (count % 1000 - 500) / 500],
    size: [100, 200 * Math.abs(Math.sin(count % 300 / 300))], // in pixels
    color: [1, 0.5, 0.25, 1]
  })
})

//
// c.rect({
//   position: [-0.5, -0.5],
//   size: [0.25, 0.25],
//   color: [0.75, 0.0, 0.25, 1]
// })

//
// setTimeout(() => {
//   c.frame((count) => {
//     c.background({
//       color: [1, 1, 1, 1],
//     })
//
//     c.rect({
//       position: [-0.5, -0.5],
//       size: [0.25, 0.25],
//       color: [0.75, Math.abs(Math.sin(count / 100)), 0.25, 1]
//     })
//
//     c.rect({
//       position: [0.5, 0.5],
//       size: [0.25, 0.25],
//       color: [1, 0.5, 0.25, 1 - count / 250]
//     })
//   })
// }, 1500)
