// 配置文件
// 所有接口的地址都放到这里
// 所有接口的基地址
var BASEURL = 'http://192.168.18.6:8000'
  // 保存所有接口地址
  // 不能再一个js文件引入另外一个js文件
var APILIST = {
  user_login: BASEURL + '/admin/login',
  user_logout: BASEURL + '/admin/logout',
  user_genInfo: BASEURL + '/admin/getuser'
}