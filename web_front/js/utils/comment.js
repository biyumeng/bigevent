var comment = {
    //添加评论
    add: function(name, content, id, callback) {
        $.post(APIURLS.comment_add, {
                'name': name,
                'content': content,
                'article_id': id,
            },
            function(res) {
                callback(res)
            })
    },
    //评论列表
    get: function(id, callback) {
        $.get(APIURLS.comment_get, {
                'article_id': id,
            },
            function(res) {
                callback(res)
            })
    }
}