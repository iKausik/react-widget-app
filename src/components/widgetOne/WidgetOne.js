import React, { useState } from "react";
import { Card } from "@mui/material";

import "./WidgetOne.css";
import CustomSlider from "./CustomSlider";
import ProgressBar from "./ProgressBar";

import middleImg from "../../assets/middleImg.svg";

const WidgetOne = () => {
  const [value, setValue] = useState(5);
  const [progress, setProgress] = useState(value);

  const handleSliderChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
    setProgress(newValue);
  };

  return (
    <Card
      className="card"
      style={{
        backgroundColor: "#363e66",
        color: "#F2F9FF",
        textAlign: "center",
      }}
      data-testid="widget-one"
    >
      <div className="circles">
        <div className="circle1"></div>
        <div className="progressBar">
          <ProgressBar
            strokeWidth="10"
            size="210"
            percentage={progress}
            data-testid="progress-bar"
          />
        </div>
        <div className="circle2"></div>
        <div className="circle3">
          <img
            src={middleImg}
            alt="MiddleImg"
            title="MiddleImg"
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="number" data-testid="number">
          {value}
        </div>
      </div>

      <div className="slider">
        <CustomSlider
          aria-label="custom-slider"
          min={0}
          step={1}
          max={10}
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
        />
      </div>
    </Card>
  );
};

export default WidgetOne;
