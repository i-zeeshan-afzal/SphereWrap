import React from "react";
import CustomizedSlider from "./components/CustomizedSlider";
import CanvasSphere from "./components/CanvasSphere";
import { templateWhite, templateFighter, mockupMug } from "./assets";
import "./styles.css";

export default class App extends React.Component {
  state = {
    ctx: null,
    startAngle: 10,
    tilt: 12,
    perspective: 15,
    width: 208,
    height: 420,
    stretch: 1,
    top: 100,
    left: 100
  };
  getContext = (ctx) => {
    //this.setState({ ctx });
    this.loadImage();
  };

  loadImage = () => {
    let {
      startAngle,
      stretch,
      tilt,
      perspective,
      width,
      height,
      top,
      left
    } = this.state;
    let canvas = document.getElementById("canvas-sphere");
    let ctx = canvas.getContext("2d");
    let productImg = new Image();
    productImg.onload = () => {
      let iw = productImg.width,
        ih = productImg.height;
      canvas.width = iw;
      canvas.height = ih;

      ctx.drawImage(
        productImg,
        0,
        0,
        productImg.width,
        productImg.height,
        0,
        0,
        iw,
        ih
      );
      console.log("loaded", startAngle);
      let wrapImg = new Image();
      wrapImg.onload = () => {
        this.draw(
          wrapImg,
          ctx,
          (startAngle * 10) / 4000,
          tilt,
          perspective,
          width,
          height,
          stretch,
          left,
          top
        );
      };
      wrapImg.src = templateFighter;
    };
    productImg.src = mockupMug;
  };

  draw = (
    image,
    ctx,
    ang,
    tilt,
    perspective,
    width,
    height,
    stretch,
    offsetX = 540,
    offsetY = 520
  ) => {
    let step = 1 / Math.max(image.width, 3000);
    for (var i = 0; i < 1; i += step) {
      let a = i * Math.PI;
      let a1 = (i + step * 2) * Math.PI;
      let ix = i * image.width * stretch;
      let iw = step * image.width * stretch;
      a += ang * Math.PI * 2;
      a1 += ang * Math.PI * 2;
      a = Math.PI - a;
      a1 = Math.PI - a1;
      let x = offsetX;
      let y = offsetY;

      let x1 = x + Math.cos(a1) * width;
      let y1 = y + Math.sin(a) * tilt;
      x += Math.cos(a) * width;
      y += Math.sin(a) * tilt;
      let s = Math.sin(a);
      let s1 = Math.sin(a1);
      if (s > 0 || s1 > 0) {
        ctx.drawImage(
          image,
          ix,
          0,
          iw,
          image.height,
          x1 + 15,
          y - s * perspective * 0.5,
          x - x1 - 1,
          height + s * perspective
        );
      }
    }
  };

  renderChange = (values) => {
    this.setState({ ...values });
    console.log(values);
    this.loadImage();
  };

  render() {
    const {
      startAngle,
      stretch,
      top,
      left,
      height,
      width,
      perspective,
      tilt
    } = this.state;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-5">
            <CustomizedSlider
              label={"Start Angle"}
              min={0}
              max={440}
              step={10}
              value={startAngle}
              onchangeValue={(newValue) => {
                this.renderChange({ startAngle: newValue });
              }}
            />
            <CustomizedSlider
              label={"Shrink"}
              min={0.1}
              max={2}
              step={0.1}
              value={stretch}
              onchangeValue={(newValue) => {
                this.renderChange({ stretch: newValue });
              }}
            />
          </div>
          <div className="col-5">
            <CustomizedSlider
              label={"tilt"}
              min={0}
              max={25}
              step={1}
              value={tilt}
              onchangeValue={(newValue) => {
                this.renderChange({ tilt: newValue });
              }}
            />
            <CustomizedSlider
              label={"Perspective"}
              min={0}
              max={25}
              step={1}
              value={perspective}
              onchangeValue={(newValue) => {
                this.renderChange({ perspective: newValue });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <CustomizedSlider
              label={"Top"}
              min={0}
              max={1000}
              step={1}
              value={top}
              onchangeValue={(newValue) => {
                this.renderChange({ top: newValue });
              }}
            />
            <CustomizedSlider
              label={"Left"}
              min={0}
              max={1000}
              step={1}
              value={left}
              onchangeValue={(newValue) => {
                this.renderChange({ left: newValue });
              }}
            />
          </div>
          <div className="col-5">
            <CustomizedSlider
              label={"Height"}
              min={10}
              max={1000}
              step={1}
              value={height}
              onchangeValue={(newValue) => {
                this.renderChange({ height: newValue });
              }}
            />
            <CustomizedSlider
              label={"Width"}
              min={10}
              max={1000}
              step={1}
              value={width}
              onchangeValue={(newValue) => {
                this.renderChange({ width: newValue });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CanvasSphere
              onCreateCanvas={(ctx) => {
                this.getContext(ctx);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
