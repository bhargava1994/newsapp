var express = require('express');
var router = express.Router();
var users=require('../models/users.js');
var passport=require('passport');
var Strategy=require('passport-local').Strategy;
var connectflash=require('connect-flash');


router.post('/save',function(req,res)
{

var newusers=new users();
 newusers.username=req.body.username;
newusers.password=req.body.password;

newusers.save();
  res.send("inserted");
});






router.delete('/delete',function(req,res)
{

users.findOne({username:req.body.username},function(err,user)
{
  if(err)
  {
    res.send("there is an Error!!");
  }
  else {
    user.remove(function(err1,userremove)
    {
      if(err1)
        {
        res.send("there is an Error1");
        }
      else {

        res.send("deleted Successfully..!!");
            }
      })
    }
  });
});


router.get('/view',function(req,res)
{
users.find({},function(err,user)
{
  if(err) throw err;
res.send(user);
});
});


router.post('/login',
 passport.authenticate('local', { failureRedirect: '/login' }),
 function(req, res) {
   res.send('welcome to login');
 });


 //passport sessions

router.put('/update',function(req,res)
{

users.update({username:req.body.username},{$set:{password:req.body.password}},function(err)
{
  if(err)
  {
    res.send("there is an error");
  }
  else {
    res.send("Password Updated Successfully");
  }
})

//res.send("this is to update the news...");



});

module.exports = router;
