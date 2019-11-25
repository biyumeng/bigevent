var article = {
    //文章搜索
    getFive: function(callback) {
        $.get(APIURLS.article_show, {
                'perpage': 5,
                // 'type': type,
                'state': '已发布',
            },
            function(res) {
                callback(res)
            })
    },
    //获得文章详情
    getDetail: function(id, callback) {
        $.get(APIURLS.article_show, {
                'id': id,
            },
            function(res) {
                callback(res)
            })
    },
}