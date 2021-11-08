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
        <div className="app">
        <Header />
        <div className="body">
        <Routes>

          <Route path="/" element={<HomeScreen />} />
          <Route path="/todo" element={<TodoScreen />} />
        </Routes>
        </div>
        <Footer />
        </div>
      </Router>
      
    </>
  );
};

export default App;

// TODO make grid for page
// TODO hamburger menu for mobile screen with fun animations - slide in from side
// Create homescreen - display list of todos and input and add
// Create component for CRUD
