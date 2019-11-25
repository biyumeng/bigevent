// 模块
// 把所有的，有关于用户的操作全写在一起
var user = {
    //后台用户登录
    login: function(myName, myPassword, callback) {
        $.post(APIURLS.user_login, {
            user_name: myName,
            password: myPassword
        }, function(res) {
            callback(res)
        })
    },

    //用户退出
    logout: function(callback) {
        $.post(APIURLS.user_logout, function(res) {
            callback(res)
        })
    },

    //获取用户信息
    getuser: function(callback) {
        $.get(APIURLS.user_getuser, function(res) {
            callback(res)
        })
    },
}