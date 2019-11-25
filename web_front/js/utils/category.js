var category = {
    //获得文章类别
    show: function(callback) {
        $.get(APIURLS.category_show, function(res) {
            callback(res)
        })
    },
}