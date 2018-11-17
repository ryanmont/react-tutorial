import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom'
import { Button,ButtonGroup }  from 'react-bootstrap';

class DayNav extends Component {
  render() {
    return (
      <div className="nav">

        {/* <Navbar  collapseOnSelect >
     

        <Navbar.Collapse>
          <Nav center >
            
            <NavItem >
              Day 1
            </NavItem>

            <NavItem eventKey={2} href="/DayTwo">
              Day2
            </NavItem>

            <NavItem eventKey={3} href="/JNO">
              JNO
            </NavItem>

            <NavItem eventKey={4} href="Round">
              Round
            </NavItem>
         

          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
 
<br />
<div className= "daynav">
<ButtonGroup justified >
  <Button eventKey={1} href="/DayOne" className= "btn btn-custom2 link1"> Day One</Button>
  <Button eventKey={3} href="/DayTwo" className= "btn btn-custom2 link2">Day Two</Button>
  <Button eventKey={3} href="/JNO" className= "btn btn-custom2 link3">JNO</Button>
  <Button eventKey={4} href="Round" className= "btn btn-custom2 link4"> Round</Button>
 
</ButtonGroup>
</div>
      <br />
      <br />
      <br />

      </div>



    
    );
  }
}

export default DayNav; 

