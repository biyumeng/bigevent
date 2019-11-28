const category = {
    //获得文章类别
    show: (callback) => {
        $.get(APIURLS.category_show, (res) => {
            callback(res)
        })
    },
}