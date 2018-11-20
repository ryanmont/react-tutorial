import React, { Component } from 'react';
import { Button,ButtonGroup }  from 'react-bootstrap';

class DayNav extends Component {
  render() {
    return (
      <div >
 
<br />
<div className= "daynav">
  <ButtonGroup justified >
    <Button eventKey={1} href="/DayOne" className= "btn btn-custom2 link1"> Day One</Button>
    <Button eventKey={3} href="/DayTwo" className= "btn btn-custom2 link2">Day Two</Button>
    <Button eventKey={3} href="/JNO" className= "btn btn-custom2 link3">JNO</Button>
  
  </ButtonGroup>
</div>

      </div>
    
    );
  }
}

export default DayNav; 

