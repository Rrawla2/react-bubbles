import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import { BubbleContext } from "./context/BubbleContext";
import "./styles.scss";

function App() {
  const [color, setColor] = useState([{
    color: "",
    code: {
      hex: ""
    },
    id: ""
  }]);

  return (
    <Router>
    <BubbleContext.Provider value={{ color, setColor }}>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <ProtectedRoute exact path="/protected" component={BubblePage}/>
      </div>
      </BubbleContext.Provider>
    </Router>
  );
}

export default App;
