var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
res.render('work', {goods: [
{url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
{url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
{url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'}
]})
})
 
module.exports = router;