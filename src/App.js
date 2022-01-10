import { Container } from "@mui/material";
import "./App.css";

import WidgetOne from "./components/widgetOne/WidgetOne";
import WidgetTwo from "./components/widgetTwo/WidgetTwo";

function App() {
  return (
    <Container className="container">
      <div className="app">
        <WidgetOne />
        <WidgetTwo />
      </div>
    </Container>
  );
}

export default App;
