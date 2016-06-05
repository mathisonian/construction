# construction
2d and 3d shape primitives for webgl, built with regl


## 2d api sketch

```js
var Construction = require('construction/2d');
var c = new Construction({el: el})

// immediately draw to the canvas
c.circle({x: x, y: y, r: r, color: 'red'})
c.rect({x: x, y: y, width: w, height: h, color: '#333'})

// draw multiple circles
c.circle([{x: x1, y: y1}, {x: x2, y: y2}])

// draw loop
c.frame((count) => {
    c.clear()
    c.rect(opts)
})
```

## 3d api sketch

```
var Construction = require('construction/3d');
var c = new Construction({el: el})

c.camera({position: [0, 0, 0], lookat: [0, 1, 0]})

// add a light
c.light({type: 'point', position: []})

// immediately draw to the canvas
c.sphere({position: [x, y, z], size: r, color: 'red'})
c.box({position: [x, y, z], size: [w, h, d], color: '#333'})

// draw multiple objects
c.sphere([{x: x1, y: y1, z: z1}, {x: x2, y: y2, z: z2}])


// draw loop
c.frame((count) => {
    c.clear()
    c.rect(opts)
})
```

### available methods

#### 2d
 * .circle()
 * .rect()
 * what else?

#### 3d

