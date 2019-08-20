const query = require('../utils/utils')
const router = (req, res) => {
    const user = req.params.user
    const pwd = req.params.pwd
    query(`select * from user where user="${user}";`, [1], (err, results, fields) => {
        try{if(results[0].user===user&&results[0].pwd===pwd){
            results[0].stuts='登录成功'
            res.send(results[0])

        }}catch(e){
            let obj={}
            obj.stuts='用户名或密码错误'
            res.send(obj)
        }
        // res.send(results)
        

    })
}

module.exports = router
