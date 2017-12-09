module.exports = function (moduleOptions) {
  this.options.head = {
    title: 'zhuweiyou',
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'x-ua-compatible', content: 'ie=edge'},
      {name: 'description', content: 'Web Developer'},
      {name: 'renderer', content: 'webkit'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
      {name: 'format-detection', content: 'telephone=no,address=no,email=no'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0'}
    ]
  }
}