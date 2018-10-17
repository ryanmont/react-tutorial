import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom'
import { Nav,NavItem,Navbar }  from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">

        <Navbar  collapseOnSelect fixedTop >
        <Navbar.Header>
          <Navbar.Brand>

            <a href= "https://www.janecon.com"> 
            <img src="https://s3-us-west-1.amazonaws.com/mont-general/janecon2019.png" alt="faq" style={{"width":"250px"}} />
            </a>
          
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>


        <Navbar.Collapse>
          <Nav pullRight >
            
            <NavItem eventKey={1} href="/">
              what's UP
            </NavItem>

            <NavItem eventKey={2} href="/theLOCALE">
              theLOCALE
            </NavItem>

            <NavItem eventKey={3} href="/theLINEUP">
              theLINEUP
            </NavItem>

            <NavItem eventKey={4} href="QandA">
              QandA
            </NavItem>

            <NavItem  className ="register" eventKey={5} href="http://www.regfox.com">
              I'M in!
            </NavItem>
         

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Navigation; 


