export default {
    getBookList () {
        return `/api/booklist`
    },
    getBooksDetail(bookId){
        return `/api/booklist?id=${bookId}`
    },
    getBookSimilar(id){
        return `/api/booklist?id=${id}`
    },
    getBookChapter(id,chapter){
        return `/api/book?book=${id}&id=${chapter}`
    },
    getBookListPanel(id){
        return `/api/titles?id=${id}`
    },
    getCategoryList(type)
    {
        return `/api/type?type=${type}`
    },
    getSortList()
    {
        return `/cats/lv2/statistics`
    },
    getBanner()
    {
        return `/api/banner`
    },
    checkUsername(user,pwd){
        return `/api/checkuser/${user}/${pwd}`
    },
    registUser(user,pwd){
        return `/api/registuser/${user}/${pwd}`
    }

}
