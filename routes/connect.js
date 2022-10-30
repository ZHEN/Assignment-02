// users.js
var express = require('express');
var router = express.Router();


//注册接口
router.post('/connext', (req, res) => {
//   let data = {
//     username: req.body.username,
//     password: req.body.password,
//     password2: req.body.password2
//   }
//   model.connect((db) => {
//     db.collection('users').insertOne(data, (err, ret) => {
//       if (err) {
//         console.log('注册失败');
//         res.redirect('/regist')
//       } else {
//         console.log('注册成功');
//         res.redirect('/login');
//       }
//     })
//   })
})

module.exports = router;