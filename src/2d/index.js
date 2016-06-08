import regl from 'regl';
import commands  from './commands';

class Construction {

  constructor(options) {
    this.regl = regl();
    this.commands = commands(this.regl);
  }

  background (options) {
    this.regl.clear({
      color: options.color,
      depth: 1
    });
  }

  frame (callback) {
    this.regl.frame((__, context) => {
      callback(context.count);
    });
  }

  rect (options) {
    const { position, size } = options;
    const vertices = [[
      [position[0], position[1]],
      [position[0], position[1] + size[1]],
      [position[0] + size[0], position[1] + size[1]],
    ], [
      [position[0], position[1]],
      [position[0] + size[0], position[1]],
      [position[0] + size[0], position[1] + size[1]],
    ]];
    this.commands.triangle([{
      position: this.regl.buffer(vertices[0]),
      color: options.color
    }, {
      position: this.regl.buffer(vertices[1]),
      color: options.color
    }]);
  }

  ellipse (options) {
    const { position, size, color } = options;

    this.commands.ellipse({
      position: this.regl.buffer(position),
      size: size,
      color: color
    });
  }

  circle (options) {
    const { position, size, color } = options;

    this.commands.ellipse({
      position: this.regl.buffer(position),
      size: [size, size],
      color: color
    });
  }

  line (options) {
    const { start, end, color } = options;

    this.commands.line({
      position: this.regl.buffer(start.concat(end)),
      color: color
    });
  }
}




export default Construction;
