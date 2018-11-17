

import React, { Component } from 'react';


class Video extends Component {
  render() {
    return (
      <div >
        <div className ="landing-video">
          <div className="iframe-container">
           <iframe title={"Video"} src="https://www.youtube.com/embed/2vgvlcO8m_g?theme=light&amp;color=white&amp;rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" color= "white" allow="autoplay; encrypted-media" allowFullScreen ></iframe>
          </div>
          </div>

      </div>
    );
  }
}

export default Video; 








