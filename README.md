# regl-shape
shape primitives built on top of regl


## api sketch

```js
var ReglShape = require('regl-shape');

rs = new ReglShape({
  width: // provide width & height or an existing canvas elt
  height: 
  domain: [xMin, xMax], // optional, defaults to 0-1
  range: [yMin, yMax]
})

points = rs.circle({
  x: [], 
  y: [],
  r: [], // singleton or array
  color: [], // singleton or array
  size: [], // singleton or array
}, {
  easing: 'quadratic-in-out',
  duration: 750
})

points.set({
  x: [],
  y: []
}) // animated update step
```


### available methods

 * .circle()
 * .rect()
 * .line()
 * .path()
 * what else?


