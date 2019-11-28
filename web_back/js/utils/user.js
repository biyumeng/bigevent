// 模块
// 把所有的，有关于用户的操作全写在一起
const user = {
    //后台用户登录
    login: (myName, myPassword, callback) => {
        $.post(APIURLS.user_login, {
                user_name: myName,
                password: myPassword
            },
            res => callback(res)
        )
    },

    //用户退出
    logout: callback => {
        $.post(APIURLS.user_logout,
            res => callback(res)
        )
    },

    //获取用户信息
    getuser: callback => {
        $.get(APIURLS.user_getuser,
            res => callback(res)
        )
    },
}