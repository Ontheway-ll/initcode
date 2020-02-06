// 定义一个对象
// 模块化式开发
// 把所有与用户相关功能写在一个对象中
// 用户登录

// $.get(),$post(),$.ajax(),得到的都是一个对象
// 这个对象上有then方法，then()的功能是获取返回来的数据
// $.post().then(funthion(res){res是接口返回来的数据})
var user = {
  login: function(userName, userPwd) {
    return $.post(APILIST.user_login, {
      'user_name': userName,
      'password': userPwd
    })

  },
  // 用户退出
  logout: function() {
    return $.post(APILIST.user_logout)
  },
  // 获取信息   
  getInfo: function() {
    return $.get(APILIST.user_genInfo)
  }
}

// --------------------

// getInfo: function() {
//   $.get(APILIST.user_genInfo)
// ***************************
// var rs= $.get(APILIST.user_genInfo)
// return  rs
// ******************************
// .then(function(res) {
//     console.log(res);
//     if (res.code === 200) {
//       // 获取成功，并显示
//       $("#userName").text(res.data.nickname) //获取管理员名字，text
//       $(".userImg").attr('src', res.data.user_pic) //把管理员头像换掉
//     }
//   })
// }