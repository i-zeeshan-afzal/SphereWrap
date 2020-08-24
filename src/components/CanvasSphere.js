import React, { Component } from "react";

class CanvasSphere extends Component {
  constructor() {
    super();
    this.state = {
      canvasSize: {
        height: 450,
        width: 450
      }
    };
  }
  componentDidMount = () => {
    this.initCanvas();
    this.props.onCreateCanvas(null);
  };
  initCanvas = () => {};
  componentDidUpdate = () => {
    console.log("update");
  };

  render() {
    const { canvasSize } = this.state;
    return (
      <canvas
        style={{ border: "1px solid black" }}
        id="canvas-sphere"
        width={canvasSize.width}
        height={canvasSize.height}
      />
    );
  }
}

export default CanvasSphere;
