import React from "react";
import "../App.css";

class EventUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      t1Name: "",
      t2Name: "",
      t1MapScore: 0,
      t2MapScore: 0,
      t1RKScore: 0,
      t2RKScore: 0,
      eventName: "",
      bestOf: "",
      timeStart: "",
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("submitted update form");
  };
  render() {
    return (
      <div>
        <form>
          <fieldset className="form">
            <div style={{ margin: "20px", color: "white" }}>
              {/* team 1 */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%",
                    textAlign: "left",
                  }}
                >
                  <label>Team 1</label>
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      backgroundColor: "#131212",
                      color: "white",
                    }}
                    type="text"
                    name="t1Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Map Score</label>
                  <input
                    style={{
                      height: "30px",
                      backgroundColor: "#131212",
                      color: "white",
                    }}
                    type="number"
                    name="t1MapScore"
                    className="numberInput"
                    onChange={this.handleChange}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Round/Kill Score</label>
                  <input
                    style={{
                      height: "30px",
                      backgroundColor: "#131212",
                      color: "white",
                    }}
                    type="number"
                    name="t1RKScore"
                    className="numberInput"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* team 2 */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%",
                    textAlign: "left",
                  }}
                >
                  <label>Team 2</label>
                  <input
                    type="text"
                    name="teamTwo"
                    style={{
                      height: "30px",
                      width: "100%",
                      backgroundColor: "#131212",
                      color: "white",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label>Map Score</label>
                  <input
                    style={{
                      height: "30px",
                      color: "white",
                      backgroundColor: "#131212",
                    }}
                    type="number"
                    name="t2MapScore"
                    className="numberInput"
                    onChange={this.handleChange}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>Round/Kill Score</label>
                  <input
                    style={{
                      height: "30px",
                      color: "white",
                      backgroundColor: "#131212",
                    }}
                    type="number"
                    name="t2RKScore"
                    className="numberInput"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  textAlign: "left",
                }}
              >
                <label>Event Name</label>
                <input
                  style={{
                    height: "30px",
                    color: "white",
                    backgroundColor: "#131212",
                  }}
                  type="text"
                  name="eventName"
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  textAlign: "left",
                }}
              >
                <label>Best Of</label>
                <input
                  type="text"
                  name="bestOf"
                  onChange={this.handleChange}
                  style={{
                    height: "30px",
                    color: "white",
                    backgroundColor: "#131212",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  textAlign: "left",
                }}
              >
                <label>Time Start</label>
                <input
                  type="text"
                  name="timeStart"
                  onChange={this.handleChange}
                  style={{
                    height: "30px",
                    color: "white",
                    backgroundColor: "#131212",
                  }}
                />
              </div>

              <input type="submit" value="Update" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default EventUpdateForm;
