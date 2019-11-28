//基础信息提出来
const BASEURL = 'http://localhost:8000/'

// 列出所有用过的接口的地址
const APIURLS = {
    user_login: BASEURL + 'admin/login',
    user_logout: BASEURL + 'admin/logout',
    user_getuser: BASEURL + 'admin/getuser',

    category_show: BASEURL + 'admin/category_search',
    category_delete: BASEURL + 'admin/category_delete',
    category_add: BASEURL + 'admin/category_add',
    category_edit: BASEURL + 'admin/category_edit',

    article_show: BASEURL + 'admin/search',
    article_del: BASEURL + 'admin/article_delete',
    article_add: BASEURL + 'admin/article_publish',
    article_edit: BASEURL + 'admin/article_edit',
}