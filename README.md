# construction

2d and 3d shape primitives for webgl, built with [regl](https://github.com/mikolalysenko/regl), inspired by [processing](http://p5js.org/)


## 2d Example

```js
var Construction = require('construction/2d');
var c = new Construction({el: el})

// immediately draw to the canvas
c.circle({position: [x, y], size: r, color: 'red'})
c.rect({position: [x, y], size: [w, h], color: '#333'})

// draw multiple circles
c.circle([{position: [x1, y1]}, {position: [x2, y2]}])

// draw loop
c.frame((count) => {
    c.background({color: 'black'})
    c.rect(opts)
})
```

## 3d Example

```js
var Construction = require('construction/3d');
var c = new Construction({el: el})

c.camera({position: [0, 0, 0], lookat: [0, 1, 0]})

// add a light
c.light({type: 'point', position: []})

// immediately draw to the canvas
c.sphere({position: [x, y, z], size: r, color: 'red'})
c.box({position: [x, y, z], size: [w, h, d], color: '#333'})

// draw multiple objects
c.sphere([{position: [x1, y1, z1]}, {position: [x2, y2, z2]}])

// draw loop
c.frame((count) => {
    c.background({color: 'black'})
    c.box(opts)
})
```

### available methods

#### 2d

* ellipse()
* rect()
* line()
* triangle()
* arc()

#### 3d

