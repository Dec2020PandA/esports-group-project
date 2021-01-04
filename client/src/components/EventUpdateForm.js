import React from "react";
import "../App.css";

class EventUpdateForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <fieldset className="form">
            <div>
              <div>
                <label>Team 1</label>
                <input type="text" name="teamOne" />

                <label>Map Score</label>
                <input type="number" name="mapScore" className="numberInput" />

                <label>Round/Kill Score</label>
                <input type="number" name="rkScore" className="numberInput" />
              </div>
              <div>
                <label>Team 2</label>
                <input type="text" name="teamTwo" />
                <label>Map Score</label>
                <input type="number" name="mapScore" className="numberInput" />

                <label>Round/Kill Score</label>
                <input type="number" name="rkScore" className="numberInput" />
              </div>
              <div>
                <label>Event Name</label>
                <input type="text" name="eventName" />
              </div>
              <div>
                <label>Best Of</label>
                <input type="text" name="bestOf" />
              </div>
              <div>
                <label>Time Start</label>
                <input type="text" name="timeStart" />
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
