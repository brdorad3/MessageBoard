const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  
  res.render('index', { message : messages  });
});
router.get('/new', function(req, res, next) {
  res.render('form',{ title: 'form'})
});
router.post('/new', function(req,res,next){
  const userName = req.body.name
  const message = req.body.message
  messages.push({text: message, user: userName, added: new Date()});
  res.redirect('/')
})

module.exports = router;
