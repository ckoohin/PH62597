import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import { useState } from "react";

function App() {
    // const [isOn, setIsOn] = useState(true);
    // console.log(isOn);
    // const handleClick = () =>{
    //     const newValue = !isOn;
    //     console.log(newValue);
    //     setIsOn(newValue);
    // }
    // const handleClickArg = isClicked => {
    //     setIsOn(isClicked)
    // }
    return (
        <BrowserRouter>
        {/* <button className="bg-amber-300" onClick={handleClick}>Click{ isOn ? "On" : "Off"}</button>
        <button className="bg-amber-300" onClick={() => handleClickArg(!isOn)}>Click{ isOn ? "On" : "Off"}</button> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;