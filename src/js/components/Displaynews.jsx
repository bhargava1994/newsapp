import React from 'react';


export default class Displaynews extends React.Component
  {
  constructor()
    {
      super();


    }

savefunction()
{
$.ajax({
 url: "http://localhost:8085/news/save",
 type: "POST",

  data:this.props.dataa,

 success : function(msg)
{
console.log("this is coming to save function");

}.bind(this),

 error: function(err){
  console.log("error");
 }.bind(this)
});
alert("news saved sucessfully");
}



    render()
     {
        return(
            <div>
              <div className="container">
                <div className="jumbotron">
                    <div className="row">

                        <div className="col-sm-6">
                          <img src={this.props.dataa.urlToImage} width="500px" height="300px"></img>

                        </div>

                      <div className="col-sm-6">
                      <h4><b>{this.props.dataa.title}</b></h4>
                      <h4>{this.props.dataa.author}</h4>
                        <a href="">url:{this.props.dataa.url}</a><br/><br/>
                        <h5><b>Description :</b></h5>
                      <div className="well">
                      <h4>{this.props.dataa.description}</h4>
                    </div>


                       <input type="button" className="btn btn-info" value="save" onClick={this.savefunction.bind(this)}/><br/><br/>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            )
    }
 }
