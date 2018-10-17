
import React, { Component } from 'react';
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';




class LineupCollapse extends Component {
  render() {
    return (
      <div >

<center>

 

<div className = "navlineup">

<Navbar>
  <Nav>
    <NavDropdown eventKey={3} title="Thursday" id="basic-nav-dropdown">
    <div className="scheduledrop">
        CEO Keynote <br />
        Customer Insight <br />
        Branding <br />
        Seller Speaker <br />
        Round Table Discussions<br />
        Erin Gargan Keynote <br />
        </div>
    </NavDropdown>

        <NavDropdown eventKey={3} title="Friday" id="basic-nav-dropdown">
        <div className="scheduledrop">
        CEO Keynote <br />
        Product Announcements <br />
        Break Out Sessions <br />
        Service <br />
        Seller Speaker <br />
        Rachel Hollis <br />
        </div>
    </NavDropdown>
        <NavDropdown eventKey={3} title="JNO" id="basic-nav-dropdown">

   <div className="jnoschedule">
   <img src="https://s3-us-west-1.amazonaws.com/mont-general/jno+graphic+lineup.png" alt="faq" style={{"width":"100%"}} />
   </div>
    </NavDropdown>
  </Nav>
</Navbar>


</div>












    {/* <PanelGroup accordion id="accordion-example">
    
  <Panel eventKey="1">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    <img src="https://s3-us-west-1.amazonaws.com/mont-general/janecon2019.png" alt="faq" style={{"width":"250px"}} />
    </Panel.Body>
  </Panel>
  <Panel eventKey="2">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
      aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </Panel.Body>
  </Panel>
  <Panel eventKey="3">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
      aesthetic synth nesciunt you probably haven't heard of them accusamus
      labore sustainable VHS.
    </Panel.Body>
  </Panel>
</PanelGroup> */}

<br />
</center>
      </div>
    );
  }
}

export default LineupCollapse; 

