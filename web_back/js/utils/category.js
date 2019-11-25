var category = {
    //获得文章类别
    show: function(callback) {
        $.get(APIURLS.category_show, function(res) {
            callback(res)
        })
    },
    //删除文章类别
    delete: function(id, callback) {
        $.post(APIURLS.category_delete, { 'id': id }, function(res) {
            callback(res)
        })
    },
    //添加文章类别
    add: function(name, slug, callback) {
        $.post(APIURLS.category_add, { 'name': name, 'slug': slug }, function(res) {
            callback(res)
        })
    },
    //编辑文章类别
    edit: function(id, name, slug, callback) {
        $.post(APIURLS.category_edit, { 'id': id, 'name': name, 'slug': slug }, function(res) {
            callback(res)
        })
    },
}