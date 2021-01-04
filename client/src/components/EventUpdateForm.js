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
            <div>
              <div>
                <label>Team 1</label>
                <input type="text" name="t1Name" onChange={this.handleChange} />

                <label>Map Score</label>
                <input
                  type="number"
                  name="t1MapScore"
                  className="numberInput"
                  onChange={this.handleChange}
                />

                <label>Round/Kill Score</label>
                <input
                  type="number"
                  name="t1RKScore"
                  className="numberInput"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Team 2</label>
                <input type="text" name="teamTwo" />
                <label>Map Score</label>
                <input
                  type="number"
                  name="t2MapScore"
                  className="numberInput"
                  onChange={this.handleChange}
                />

                <label>Round/Kill Score</label>
                <input
                  type="number"
                  name="t2RKScore"
                  className="numberInput"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Event Name</label>
                <input
                  type="text"
                  name="eventName"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Best Of</label>
                <input type="text" name="bestOf" onChange={this.handleChange} />
              </div>
              <div>
                <label>Time Start</label>
                <input
                  type="text"
                  name="timeStart"
                  onChange={this.handleChange}
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
