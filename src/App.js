import "./App.css";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
import About from "./componets/About";
import React, { useState } from "react";
import Alert from "./componets/Alert";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormNew from "./componets/FormNew";

function App() {
  const [mode, setMode] = useState("light");
  const [textCol, setTextCol] = useState("light");
  const [alert, setAlert] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextCol("light");
      document.body.style.backgroundColor = "#1b1b1b";
      document.body.style.color = "white";
      showAlert("Dark mode enable", "success");
    } else {
      setMode("light");
      setTextCol("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enable", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textuils"
          aboutT="About"
          homeT="Home"
          mode={mode}
          toggleMode={toggleMode}
          textCol={textCol}
        />
        {/* <Navbar title= "Textuils" /> */}
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/home" element={<FormNew />} />
            {/* <Route path="home"><FormNew/></Route> */}
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  head="Please enter text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
