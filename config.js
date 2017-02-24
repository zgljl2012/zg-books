/*
 * config 配置文件
 */

var config = {
	// 名称、描述、关键字
	name:"个人作品集合",
	
	description:"使用koa+vue实现的个人电子书Web应用",
	
	keywords:"nodejs, koa, vue",

	// 开发环境（默认，可通过NODE_ENV设置）
	development:{
		host:"localhost", // 域名
		port:3000 // 端口号
	},

	// 生产环境
	production: {
		host:"localhost",
		port:"80"
	},

	// 测试环境
	testing: {
		host:"localhost",
		port:"80"
	}
}
