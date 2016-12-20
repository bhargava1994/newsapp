import React from 'react';

import ChildComponent from './ChildComponent'
import SibilingsChild from './SibilingsChild'

import NewsComponentGenerator from './NewsComponentGenerator'


export default class Homecomponent extends React.Component
  {
    constructor()
      {
        super();
        this.state={newsArr:[]};

      this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);
      }


fetchNewsFromExternalAPI(msg) {
    $.ajax({
     url: "https://newsapi.org/v1/articles?source="+msg+"&sortBy=top&apiKey=70fe321ea7674105928b992f77d128fe",
     type: "GET",
     dataType: 'JSON',

     success : function(msg){

           this.setState({newsArr:msg.articles})



     }.bind(this),

     error: function(err){
     }.bind(this)
 });
}

    render()

     {
        return(
            <div>
                 <h4><center><em>NEWS APPLICATION</em></center></h4>


                 <SibilingsChild newdata={this.fetchNewsFromExternalAPI.bind(this)}/>
                  <NewsComponentGenerator newsArrRef={this.state.newsArr}/>


            </div>
            )
    }
 }
