var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Mini Messageboard', messages: messages});
});

/* Get form page */
router.get('/new', function(req,res,next) {
  res.render('form', {title: 'Write your message.'});
});

router.post('/new', function(req,res,next) {
  let newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  };
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
