const express = require('express');
const router = express.Router();


const {User} = require('../../models/User');
const {Match} = require('../../models/Match');

router.get('/getUsers', (req, res) => {
  User.find({}).then((users) => {
    res.json(users);
  });
});

router.post('/swipeRightOnUser', (req, res) => {
  console.log(req.body);
  const swipedId = req.body.swipedId;
  const swiperId = req.body.userId;
  User.findById(swiperId).then((swiperUser) => {
    swiperUser.likedIds.push(swipedId);
    swiperUser.save();
    User.findById(swipedId).then((swipedUser) => {
      let isMatch = false;
      if (swipedUser.likedIds.includes(swiperId)) {
        isMatch = true;
        Match.create({
          userId1: swiperId,
          userId2: swipedId
        }, (err, match) => {
          if (!err) {
            console.log(match);
            swiperUser.matchIds.push(match._id);
            swipedUser.matchIds.push(match._id);
            swiperUser.save();
            swipedUser.save();
          }
          
        });
      }
      const message = (isMatch) ? 'Match' : 'No match';
      res.json({
        status: 200,
        message
      });
    }, (e) => {
      console.log('whoops');
    });
    
  }, (e) => {
    console.log('Couldnt do that');
  });
});

router.post('/swipeLeftOnUser', (req, res) => {
  const swipedId = req.body.swipedId;
  const swiperId = req.body.userId;
  User.findById(swiperId).then((user) => {
    user.dislikedIds.push(swipedId);
    user.save();
    res.json({status: 200});
  }, (e) => {
    console.log('whoops');
  });
});

const checkMatch = (swiperId, swipedId) => {
  
}


module.exports = router;