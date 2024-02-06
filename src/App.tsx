import React from "react";

import "./App.css";

import Button from "./components/shared/button/button";

function App() {
  return (
    <>
      <div className="d-flex justify-content-space-between p-10">
        <Button variant="contained" color="primary" size="lg">
          Primary
        </Button>
        <Button variant="contained" color="secondary" size="md">
          Secondary
        </Button>
        <Button variant="contained" color="success" size="sm">
          Success
        </Button>
        <Button variant="contained" color="error" size="xs">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </div>

      <div className="d-flex justify-content-space-between p-10">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
      </div>

      <div className="d-flex justify-content-space-between p-10">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
      </div>
    </>
  );
}

export default App;
