
import React, { Component } from 'react';
import Navigation from './Navigation';
// import { Button }  from 'react-bootstrap';

class Venue extends Component {
  render() {
    return (
      <div id="Nav2">
      <Navigation />
        <br />
        <br />

 <div className = "venue-one">

<img src="https://s3-us-west-1.amazonaws.com/mont-general/uvcc+copy.jpg" alt="faq" style={{"width":"100%"}} />
</div>
<br />
<center>

  < a class="btn btn-custom"  href ="http://www.utahvalleyconventioncenter.com/parking" target="_blank" rel="noopener noreferrer">
  Parking 
  &
  Directions
</a>

</center>

<div className = "venue-three">

    <div>
      <span>
      Salt Lake Airport
    </span>
    <br />
    <br />
    SLC to Provo<br />
    49.5 miles SE<br />
    <br />
    Alternate transportation:<br />
    Frontrunner train and bus ~ $6.10<br />
    <br />
    Ride-sharing service (Lyft or Uber)<br />
    Average Rate: $88(one way)<br />
    <br />
    Express Shuttle: $45 (one way)

    </div>


    <div>
      <span>
      Provo Airport
    </span>
    <br />
    <br />
    Provo to Convention Center<br />
    4.0 miles E<br />
    <br />
    Ride-sharing service (Lyft or Uber)<br />
    Average Rate: $7-$9<br />
    <br />
    Provo Frontrunner station to<br />
    Provo Center Street area: $6-$8<br />

    </div>


</div>


<div className= "venue-four">
  <br />
  <hr />
  <br />
</div>



<center>
<div className = "venue-five">

 <img src="https://s3-us-west-1.amazonaws.com/mont-general/accomodations.jpg" alt="faq" style={{"width":"100%"}} />


<br />
Get a special JaneCon rate at the Provo Marriott:<br />
<br />

$130/night plus tax<br />
* Located right across the street from the convention center

<br />
<br />
<br />


    < a className="btn btn-custom"   href="https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Jane.com%202019%20Sellers%20Conference%5Eslcvo%60janjanr%60130.00%60USD%60false%603%604/24/19%604/26/19%604/3/19&app=resvlink&stop_mobi=yes" target="_blank" rel="noopener noreferrer"> 
    Book your room now 
    </a>

</div>
</center>

      </div>
  
    );
  }
}

export default Venue; 






