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

## 3d api sketch

```

```

### available methods

#### 2d
 * .circle()
 * .rect()
 * what else?

#### 3d

