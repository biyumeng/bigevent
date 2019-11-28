const category = {
    //获得文章类别
    show: callback => {
        $.get(APIURLS.category_show,
            res => callback(res)
        )
    },
    //删除文章类别
    delete: (id, callback) => {
        $.post(APIURLS.category_delete, { 'id': id },
            res => callback(res)
        )
    },
    //添加文章类别
    add: (name, slug, callback) => {
        $.post(APIURLS.category_add, { 'name': name, 'slug': slug },
            res => callback(res)
        )
    },
    //编辑文章类别
    edit: (id, name, slug, callback) => {
        $.post(APIURLS.category_edit, { 'id': id, 'name': name, 'slug': slug },
            res => callback(res)
        )
    },
}