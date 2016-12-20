var express = require('express');
var router = express.Router();
var newsmodel=require('../models/newsmodel.js');


router.post('/save',function(req,res)
{
var newnewsmodel=new newsmodel();
newnewsmodel.Title=req.body.title;
newnewsmodel.Description=req.body.description;
newnewsmodel.Author=req.body.author;
newnewsmodel.Url=req.body.url;
newnewsmodel.urlToImage=req.body.urlToImage;
newnewsmodel.save();
res.send("news has been saved");

});






router.delete("/delete",function(req,res) {
  if(req.body){
    request=req.body.Title;
    newsmodel.remove({Title:request},function(err){
      if(err){
        res.send("Error in deleting the data");
      }
      else{
        res.send("Data is deleted successfully");
      }
    });
  }
    else{
      res.send("no data found to delete");
    }
});



router.get('/view',function(req,res)
{
newsmodel.find({},function(err,user)
{
  if(err) throw err;
res.send(user);
});
});



router.put('/update',function(req,res)
{

newsmodel.update({Title:req.body.Title},{$set:{Comments:req.body.Comments}},function(err)
{
  if(err)
  {
    res.send("there is an error");
  }
  else {
    res.send("Comments Updated Successfully");
  }
})

//res.send("this is to update the news...");



});







module.exports = router;
