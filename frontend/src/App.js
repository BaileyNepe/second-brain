import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TodoScreen from "./screens/TodoScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/todo" element={<TodoScreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

// TODO make grid for page
// TODO add in nav bar into header
// TODO hamburger menu for mobile screen with fun animations - slide in from side
// Create homescreen - display list of todos and input and add
// Create component for CRUD
