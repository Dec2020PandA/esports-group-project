import React from "react";
import "../App.css";
import logo from "../resources/tsm.png";
//NEED TO REPLACE DATA WITH PROPS FROM DATABASE

class EventScoreCard extends React.Component {
  render() {
    return (
      //Card
      <div className="eventCard">
        {/* Team 1 Info */}
        <div style={{ display: "flex", flexDirection: "row", width: "175px" }}>
          <img src={logo} alt="team logo" className="img" />
          <div style={{ marginLeft: "10px", textAlign: "left" }}>
            <p>TSM</p>
            <p style={{ fontSize: "12px" }}>3W-5L</p>
          </div>
        </div>
        {/* Match Feed */}
        <div>
          <p>LIVE</p>
          <h2>0 - 1</h2>
          <p>Bo3</p>
        </div>
        {/* Team 2 Info */}
        <div style={{ display: "flex", flexDirection: "row", width: "175px" }}>
          <div style={{ marginRight: "10px", textAlign: "right" }}>
            <p>Team Liquid</p>
            <p style={{ fontSize: "12px" }}>3W-5L</p>
          </div>
          <img src={logo} alt="team logo" className="img" />
        </div>
      </div>
    );
  }
}
export default EventScoreCard;
