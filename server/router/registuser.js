const query = require('../utils/utils')
const router = (req, res) => {
    const user = req.params.user
    const pwd = req.params.pwd
    query(`select * from user where user="${user}";`, [1], (err, results, fields) => {
        if (err) throw err
        let obj={}
        if(!results[0]){
            query(`INSERT INTO USER (user,pwd,role) VALUES ("${user}","${pwd}","user");`, [1], (err, results, fields) => {
                obj.stuts='注册成功'
                res.send(obj)
            })
        }else {
            obj.stuts='用户名已存在'
            res.send(obj)
        }
    })
}

module.exports = router
