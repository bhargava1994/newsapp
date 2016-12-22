
import React from 'react';



export default class Favnewsview extends React.Component
  {
  constructor()
    {
      super();
     this.state={
commentsdata:" "
};

    }


deletefunc()
{
$.ajax({
 url: "http://localhost:8085/news/delete",
 type: "DELETE",
data:this.props.data,
 success : function(msg)
{
 this.props.DeletedNews(this.props.data);

}.bind(this),

 error: function(err){
 }.bind(this)
});
}


updateComments()
{

$.ajax({
 url: "http://localhost:8085/news/update",
 type: "PUT",
data:'Title='+this.props.data.Title+'&Comments='+this.state.commentsdata,


 success : function(msg)
{

this.props.data;
}.bind(this),

 error: function(err){
 }.bind(this)
});
}

/*this is to set the state of the comments and this function is called by serchbox*/
ToUpdate(arg)
{
this.setState({commentsdata:arg.target.value});
}


      render()
       {
          return(
              <div>
                <div className="container">
                  <div className="jumbotron">
                      <div className="row">

                          <div className="col-sm-6">

                            <img src={this.props.data.urlToImage} width="500px" height="300px"></img>
                            <h4><b>Comments: </b></h4>
                          <div className="well">
                      <h4> <em>  {this.props.data.Comments}</em></h4>
                          </div>

                          </div>

                        <div className="col-sm-6">
                        <h4><b>{this.props.data.Title}</b></h4>
                        <h4>{this.props.data.Author}</h4>
                            <a href="">url:{this.props.data.Url}</a><br/><br/>
                          <h5><b>Description :</b></h5>
                        <div className="well">
                        <h4>{this.props.data.Description}</h4>
                        </div>
                            <a href="{this.props.data.Url}"></a>

                             <input type="button" className="btn btn-danger" value="Delete" onClick={this.deletefunc.bind(this)}/><br/><br/>
                          <textarea placeholder="comments here...." rols='20' cols='50' onChange={this.ToUpdate.bind(this)}>

                            </textarea>
                            <br/><br/>
                           <input type="button" className="btn btn-success" value="Update comments" onClick={this.updateComments.bind(this)} /><br/><br/>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              )
      }

  }
