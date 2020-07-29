import React, { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [Wnumber, setWnumber] = useState("");
  const [Advisor, setAdvisor] = useState("");
  const [Class, setClass] = useState("");

  function handleSubmit() {
    var n = document.getElementById("myForm");
    n.style.display = "block";
  }

  function handleClose(e) {
    e.preventDefault();
    var n = document.getElementById("myForm");
    n.style.display = "none";
  }
  return (
    <div className="Page-container">
      <div className="content">
        <p>Welcome to Selu Advising. Enter your w#, advisor and class</p>
        <form>
          <label for="Wnumber">W#</label>
          <input
            type="text"
            id="Wnumber"
            name="Wnumber"
            onChange={(e) => setWnumber(e.target.value)}
          ></input>
          <br />
          <label for="Advisor">Advisor</label>
          <input
            type="text"
            id="Advisor"
            name="Advisor"
            onChange={(e) => setAdvisor(e.target.value)}
          ></input>
          <br />
          <label for="Class">Class</label>
          <input
            type="text"
            id="Class"
            name="Class"
            onChange={(e) => setClass(e.target.value)}
          ></input>
          <br />
          <button onClick={() => handleSubmit()}>Submit</button>
        </form>
      </div>
      <form class="Form-popup" id="myForm">
        <span class="close" onClick={() => handleClose()}>
          &times;
        </span>
        <div>
          <p>
            you have sent {Class} to {Advisor}. Pending Aproval.
          </p>
        </div>
      </form>
    </div>
  );
}
