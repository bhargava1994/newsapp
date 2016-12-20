
import React from 'react';



export default class SibilingsChild extends React.Component
  {
newfunction()
{

var data=document.getElementById("news").value;
this.props.newdata(data);

}


    render()
     {
        return(
          <div>
            <div className="container">
			           <div className="row">
				              <div className="well">
                            <input type="text" placeholder="search news here" id="news" style={{"width":"100%","height":"50px"}}/><br/><br/>
                            <input type="button"  className="btn btn-primary btn-lg" value="search" onClick={this.newfunction.bind(this)} style={{"margin-left":"45%"}}/>

                      </div>
                  </div>
            </div>
        </div>
            )
    }
 }
