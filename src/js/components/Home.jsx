import React, { useState } from "react";

//create your first component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);

    const changeColor = () => {
        if (selectedColor === "red") setSelectedColor("yellow");
        else if (selectedColor === "yellow") setSelectedColor("green");
        else if (selectedColor === "green" && showPurple) setSelectedColor("purple");
        else setSelectedColor("red");
    };

    return (
        <div className="d-flex flex-column align-items-center background-photo">
            <div className="traffic-light">
                <div
                    onClick={() => setSelectedColor("red")}
                    className={"light red" + (selectedColor === "red" ? " glow" : "")}
                ></div>
                <div
                    onClick={() => setSelectedColor("yellow")}
                    className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
                ></div>
                <div
                    onClick={() => setSelectedColor("green")}
                    className={"light green" + (selectedColor === "green" ? " glow" : "")}
                ></div>
                {showPurple && (
                    <div
                        onClick={() => setSelectedColor("purple")}
                        className={"light purple" + (selectedColor === "purple" ? " glow" : "")}
                    ></div>
                )}
            </div>
            <button onClick={changeColor} className="btn btn-primary mt-3">Change Color</button>
            <button onClick={() => setShowPurple(true)} className="btn btn-purple mt-2">Add Purple</button>
            <button onClick={() => setShowPurple(false)} className="btn btn-danger mt-2">Remove Purple</button>
        </div>
    );
};

export default Home;
