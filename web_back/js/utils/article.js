const article = {
    //文章搜索
    show: (curPage, type, state, callback) => {
        $.get(APIURLS.article_show, {
                'page': curPage,
                'type': type,
                'state': state,
            },
            res => callback(res)
        )
    },
    //文章删除
    del: (id, callback) => {
        $.get(APIURLS.article_del, { 'id': id },
            res => callback(res)
        )
    },
    //文章添加
    add: (fd, callback) => {
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            data: fd,
            success: res => callback(res)
        })
    },
    // 获取文章
    getDetail: (id, callback) => {
        $.get(APIURLS.article_show, { 'id': id },
            res => callback(res)
        )
    },
    //文章编辑
    edit: (fd, callback) => {
        $.ajax({
            url: APIURLS.article_edit,
            type: 'post',
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            data: fd,
            success: res => callback(res)
        })
    }
}