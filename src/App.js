import React from "react";
import Navbar from "./components/Navbar";
import AnimatedRouter from "./components/AnimatedRouter";
import { BrowserRouter as Router} from 'react-router-dom';
import "./App.css";

function App() {

  return (
      <>
        <div className="backgroundColor row"></div>
        <Navbar />
        <Router className="App">
          <AnimatedRouter />
        </Router>
        
      </>
  );
}
export default App;