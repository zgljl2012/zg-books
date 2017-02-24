/**
 * 使用koa框架实现Web应用服务端
 */

var koa = require("koa");
var config = require('./config');
var app = koa();

// 默认设置为开发环境`development`
process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // 默认开发模式
console.log(process.env.NODE_ENV);

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *(){
	this.body = "Hello World";
});

app.listen(3000);

