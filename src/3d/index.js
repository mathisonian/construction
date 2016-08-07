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

  sphere (callback) {

  }

}

export default Construction;
