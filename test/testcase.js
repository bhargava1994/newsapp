var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
//app = require("../app");
app = require("../bin/www");
var url = supertest("http://localhost:8080");
var request=require('supertest');
var server=request.agent("http://localhost:8080");


/*this is for the registration of user*/
describe("this test is for the route to save users", function(err){
  it("should handle the request", function(done){
    url
        .post("/login/save")
        .expect(200)
          .send({username:"bhargava",password:"bhargava"})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("inserted",res.text, "res.text is not matching with inserted");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the registration Testing*/


/*function for the authenticate*/
function loginUser() {
  return function(done) {
      server
          .post('/login/login')
          .send({ username: 'bhargava', password: 'bhargava' })
          .expect(200)
          .end(onResponse);
      function onResponse(err, res) {
         if (err) return done(err);
         return done();
      }
  };
};
/*closed the function*/

/*this is tho check thet user is logged in(authenticate)*/
describe("This test is for the  route of authenticate of user", function(err){
  it("should handle the request", function(done){
    url
        .post("/login/login")
        .expect(200)
        .send({username:"bhargava",password:"bhargava"})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the login authenticate testing*/


/*this test is for the save news route*/
describe("This test is for save news route", function(err){
it("It should test login", loginUser())
  it("should handle the request", function(done){
  server
        .post("/news/save")
        .expect(200)
        .send({

"author": "Napier Lopez",
"title": "Facebook Live gets an audio-only mode for all the podcasters out there",
"description": "While last week Facebook built on Live’s video chops with the introduction of 360-degree video, this time around it’s paring down on the tech a bit with something a bit more old school: live audio. Relive the glory days of live radio! In all seriousness, there are plenty of situations where audio-only streams are welcome …",
"url": "http://thenextweb.com/facebook/2016/12/20/facebook-live-gets-audio-mode-podcasters/",
"urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/finalhero.png",
"publishedAt": "2016-12-20T21:01:22Z"



})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("news has been saved",res.text, "res.text is not matching with news has been saved");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the save test route*/


/*this test is for update route(updates comments)*/
describe("This test is for the update  route to update comments", function(err){
it("It should test login", loginUser())
  it("should handle the request", function(done){
  server
        .put("/news/update")
        .expect(200)
        .send({

"title": "Facebook Live gets an audio-only mode for all the podcasters out there",
"Comments":"nice"

})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("Comments Updated Successfully",res.text, "res.text is not matching with Comments Updated Successfully");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the update test route*/

/*this is test the delete route of news*/
describe("This is the test for delete route for news deletion", function(err){
it("It should test login", loginUser())
  it("should handle the request", function(done){
  server
        .delete("/news/delete")
        .expect(200)
        .send({

"title": "Facebook Live gets an audio-only mode for all the podcasters out there",
})
    .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("Data is deleted successfully",res.text, "res.text is not matching with Data is deleted successfully");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
/*closed the deleted test route*/
