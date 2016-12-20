import React from 'react';
import GrandChild from './GrandChild'


export default class ChildComponent extends React.Component
  {
  constructor()
    {
      super();

      this.newfunction=this.newfunction.bind(this);
    }
newfunction()
{
this.props.parenthandler("my new data");
}

    render()
     {
        return(
            <div>
                 <h1>Hello from Child!!!! {this.props.newData} </h1>

                 <form>
                                 <input type="button" value="clickme" onClick={this.newfunction}/></form>


                 <GrandChild  data={this.props.anotherData} data2="new data"/>


            </div>
            )
    }
 }
