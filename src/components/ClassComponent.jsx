import React from "react";

class ClassComponent extends React.Component {
  render() {
    console.log("this", this);
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <button style={this.props.buttonStyle}>{this.props.buttonText}</button>
      </div>
    );
  }
}

export default ClassComponent;
