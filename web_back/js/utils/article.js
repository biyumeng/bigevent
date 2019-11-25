var article = {
    //文章搜索
    show: function(curPage, type, state, callback) {
        $.get(APIURLS.article_show, {
                'page': curPage,
                'type': type,
                'state': state,
            },
            function(res) {
                callback(res)
            })
    },
    //文章删除
    del: function(id, callback) {
        $.get(APIURLS.article_del, { 'id': id }, function(res) {
            callback(res)
        })
    },
    //文章添加
    add: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            data: fd,
            success: function(res) {
                callback(res)
            }
        })
    },
    // 获取文章
    getDetail: function(id, callback) {
        $.get(APIURLS.article_show, { 'id': id }, function(res) {
            callback(res)
        })
    },
    //文章编辑
    edit: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_edit,
            type: 'post',
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            data: fd,
            success: function(res) {
                callback(res)
            }
        })
    }
}