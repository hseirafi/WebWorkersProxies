importScripts('../web-worker-proxies.js')

this.proxy = {

  add: function ({ o, x = o.x, y = o.y } ) {
    return x + y
  },

  multiply: function({ o, x = o.x, y = o.y }) {
    return x * y;
  }

}
