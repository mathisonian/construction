import Construction from '../src/3d'

const c = new Construction()

c.frame((count) => {
  c.background({
    color: [1, 1, 0, 1]
  })
})