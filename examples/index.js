import Construction from '../src/2d';

const c = new Construction();

c.rect({
  position: [0.5, 0.5],
  size: [0.25, 0.25],
  color: [1, 0.5, 0.25, 1]
})

c.rect({
  position: [-0.5, -0.5],
  size: [0.25, 0.25],
  color: [0.75, 0.0, 0.25, 1]
})


setTimeout(() => {
  c.frame((count) => {
    c.background({
      color: [1, 1, 1, 1],
    })

    c.rect({
      position: [-0.5, -0.5],
      size: [0.25, 0.25],
      color: [0.75, Math.abs(Math.sin(count / 100)), 0.25, 1]
    })

    c.rect({
      position: [0.5, 0.5],
      size: [0.25, 0.25],
      color: [1, 0.5, 0.25, 1 - count / 250]
    })
  })
}, 1500)
