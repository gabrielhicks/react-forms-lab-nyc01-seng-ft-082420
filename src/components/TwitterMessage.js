import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: "",
      remaining: 280
    };
  }

  handleChange = event => {
    this.setState({
      characters: event.target.value,
      remaining: (280 - event.target.value.length)
    })
  }

  render() {
    console.log(this.state)
    console.log(this.state.characters.length)
    return (
      <div>
        <h5>{this.state.remaining} characters remaining</h5>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.characters} onChange={event => this.handleChange(event)}/>
      </div>
    );
  }
}

export default TwitterMessage;
