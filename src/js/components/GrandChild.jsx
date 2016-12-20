
import React from 'react';



export default class GrandChild extends React.Component
  {

    render()
     {
        return(
            <div>
                 <h1>Hello from GrandChild!!!! {this.props.data}</h1>


            </div>
            )
    }
 }
