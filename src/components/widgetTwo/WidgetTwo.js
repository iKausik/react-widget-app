import { Card } from "@mui/material";

import "./WidgetTwo.css";
import Bar from "./Bar";
// import Bars from "./Bars_v2";

const WidgetTwo = () => {
  return (
    <Card
      className="card"
      style={{
        backgroundColor: "#363e66",
        color: "#F2F9FF",
        textAlign: "center",
      }}
      data-testid="widget-two"
    >
      <Bar />
      {/* <Bars /> */}
    </Card>
  );
};

export default WidgetTwo;
