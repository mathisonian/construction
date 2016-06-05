# construction
2d and 3d shape primitives for webgl, built with regl


## 2d api sketch

```js
var Construction = require('construction/2d');

var c = new Construction({
  width: // provide width & height or an existing canvas elt
  height: 
  domain: [xMin, xMax], // optional, defaults to 0-1
  range: [yMin, yMax]
})

points = c.circle({
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

## 3d api sketch

```
...
```

### available methods

#### 2d
 * .circle()
 * .rect()
 * what else?

#### 3d

