// Generated by CoffeeScript 1.6.3
define(function(require, exports) {
  var drag, render;
  drag = require('./drag');
  render = require('./render');
  drag.listen(function(positions) {
    return render.set_points(positions);
  });
  return drag.demo();
});

/*
//@ sourceMappingURL=main.map
*/
