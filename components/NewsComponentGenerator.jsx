import React from 'react';
import Displaynews from './Displaynews'





export default class NewsComponentGenerator extends React.Component
  {
  constructor()
    {
      super();


    }


    render()
     {
               var newsCollection= this.props.newsArrRef.map(function(headlineElement){

                   return(
                   <Displaynews dataa={headlineElement}/>

)

               })
        return(
            <div>
                {newsCollection}
            </div>
            )
    }
 }
