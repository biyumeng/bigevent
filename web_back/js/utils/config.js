//基础信息提出来
var baseurl = 'http://localhost:8000/'

// 列出所有用过的接口的地址
var APIURLS = {
    user_login: baseurl + 'admin/login',
    user_logout: baseurl + 'admin/logout',
    user_getuser: baseurl + 'admin/getuser',

    category_show: baseurl + 'admin/category_search',
    category_delete: baseurl + 'admin/category_delete',
    category_add: baseurl + 'admin/category_add',
    category_edit: baseurl + 'admin/category_edit',

    article_show: baseurl + 'admin/search',
    article_del: baseurl + 'admin/article_delete',
    article_add: baseurl + 'admin/article_publish',
    article_edit: baseurl + 'admin/article_edit',
}