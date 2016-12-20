import React from 'react';
import Favnewsview from './Favnewsview';


export default class Savednewsmap extends React.Component
  {

  constructor()
    {
      super();
     this.state={strdata:[]};
      this.newsfun=this.newsfun.bind(this);
      this.deleteNews=this.deleteNews.bind(this);
    }


newsfun() {
console.log("676768");
$.ajax({
url:  "http://localhost:8085/news/view",
type: "GET",


success : function(msg){
console.log("success");
/*msg reprewsents JSON data of news headlines sent back by external API*/
this.setState({strdata: msg});
}.bind(this),
error : function(err){
console.log("error");
}.bind(this)
});
}

deleteNews(content){
  var myData=this.state.strdata;
  var index=myData.findIndex(function(element){
  return element.Title===content.Title;

});
 if(index!==-1){
  myData.splice(index,1);
  this.setState({strdata:myData});
}

}

componentDidMount(){
this.newsfun();
}


render()
 {
           var newscollect= this.state.strdata.map(function(element){
      console.log(element);
               return(
               <Favnewsview data={element} DeletedNews={this.deleteNews.bind(this)}/>


)

           }.bind(this))
    return(
        <div>
      {newscollect}
        </div>
        )
}
 }
