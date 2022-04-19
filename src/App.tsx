import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.scss";
import {
  Container,
  Button,
  Backdrop,
  Snackbar,
  Typography,
} from "@material-ui/core";
import Test from "./components/Test";

const App = () => {
  const [count, setCount] = useState(6);
  const list = [1, 2, 3, 4, 5, 6];

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Coming Soon CCG Heathcare</div>
      <div className="hello">
        <div className="good"></div>
      </div>
      <Typography color="secondary" variant="h4">
        Hello world
      </Typography>
      Current Count: {count} <br />
      <Button className="hello" variant="contained" onClick={increment}>
        Increment
      </Button>
      <Test age={20} />
      {list.map((l, idx) => (
        <div key={idx}>{l}</div>
      ))}
    </>
  );
};

export default App;
