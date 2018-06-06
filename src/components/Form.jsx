import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.props.getWeather}>
            <input
              className="test"
              type="text"
              name="city"
              placeholder="City..."
            />
            <input
              className="test"
              type="text"
              name="country"
              placeholder="Country..."
            />
            <button class="btn btn-primary btn-sm btn test">Show me!</button>
          </form>
        </center>
      </div>
    );
  }
}

export default Form;
