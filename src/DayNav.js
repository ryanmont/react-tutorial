import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom'
import { Nav,NavItem,Navbar,Button,ButtonGroup }  from 'react-bootstrap';

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
 

<ButtonGroup justified>
  <Button eventKey={1} href="DayOne"> Day One</Button>
  <Button eventKey={3} href="/DayTwo">Day Two</Button>
  <Button eventKey={3} href="/JNO">JNO</Button>
  <Button eventKey={4} href="Round"> Round</Button>
 
</ButtonGroup>

      <br />
      <br />
      <br />

      </div>



    
    );
  }
}

export default DayNav; 

