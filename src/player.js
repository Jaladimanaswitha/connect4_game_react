import React, { Component } from "react";
import './player.css';
import {
  NavLink
} from "react-router-dom";
class Stuff extends Component {
  render() {
    return (
      <header className="main-header">
 
<br></br><br></br><br></br>
<section className="main-navigation">
  
  <NavLink to="/game"><button className="nav-btn">
  Player1 vs Player2
    </button></NavLink>
</section>;
</header>
    );
  }
}

export default Stuff;