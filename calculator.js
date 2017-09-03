importScripts('../web-worker-proxies.js')

this.proxy = {

  add: function (obj) {
    console.log(obj)
    return obj.x + obj.y
  },

  multiply: function(x, y) {
    return x * y;
  }

}
