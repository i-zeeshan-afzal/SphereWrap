import React from "react";
import CustomizedSlider from "./components/CustomizedSlider";
import CanvasSphere from "./components/CanvasSphere";
import "./styles.css";

export default function App() {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-8">
          <CanvasSphere />
        </div>
        <div className="col-4">
          <CustomizedSlider
            label={"Start Angle"}
            min={0}
            max={2}
            step={0.1}
            onchangeValue={(newValue) => {
              console.log(newValue);
            }}
          />
          <CustomizedSlider
            label={"End Angle"}
            min={0}
            max={2}
            step={0.1}
            onchangeValue={(newValue) => {
              console.log(newValue);
            }}
          />
        </div>
      </div>
    </div>
  );
}
