import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      Home screen
      <Link to="/todo">Todo</Link>{" "}
    </div>
  );
};

export default HomeScreen;
