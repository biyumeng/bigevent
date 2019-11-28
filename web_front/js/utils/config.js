//基础信息提出来
const baseurl = 'http://localhost:8000/'

// 列出所有用过的接口的地址
const APIURLS = {
    category_show: baseurl + 'admin/category_search',

    article_show: baseurl + 'admin/search',

    comment_add: baseurl + 'post_comment',
    comment_get: baseurl + 'get_comments',
}