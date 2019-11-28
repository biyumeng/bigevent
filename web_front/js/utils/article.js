const article = {
    //文章搜索
    getFive: (callback) => {
        $.get(APIURLS.article_show, {
                'perpage': 5,
                // 'type': type,
                'state': '已发布',
            },
            (res) => {
                callback(res)
            })
    },
    //获得文章详情
    getDetail: (id, callback) => {
        $.get(APIURLS.article_show, {
                'id': id,
            },
            (res) => {
                callback(res)
            })
    },
}