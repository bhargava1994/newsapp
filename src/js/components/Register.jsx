
import React from 'react';



export default class Register extends React.Component
  {

/*this is a ajax function for the URL of saving of login ID and password*/
Resgister()
{
var uname=document.getElementById('userid').value;
var pass=document.getElementById('password').value;
    $.ajax({
    url: "http://localhost:8085/login/save",
    type: "POST",
data:'username='+uname+'&password='+pass,
    success : function(msg)
    {
    console.log("successfully saved to database");
    }.bind(this),
    error: function(err){
   }.bind(this)
  });
alert("successfully registerd :"+uname)
}
/*closed ajax function*/



    render()
     {
        return(
        <div>
        <div className="container-fluid">
    <div  className="well">
  	<div className="row">
  		<div className="col-md-6">
        <center>
  			<form role="form">
  				<div className="form-group">
          UserId :<input type="text" class="form-control" id="userid" />
  				</div>
  				<div className="form-group">
            Password:<input type="password" class="form-control" id="password" />
  				</div>
  			     <p className="help-block">
  						*fill all details to login
  					</p>
            <div className="checkbox">
            <label>
  						<input type="checkbox" /> remember me?
  					</label>
  				</div>
  				<input type="button"  value="Register" className="btn btn-success" onClick={this.Resgister.bind(this)}/>
          </form>
            </center>
  		</div>
  	</div>
    </div>
  </div>

        </div>
            )
    }
 }
