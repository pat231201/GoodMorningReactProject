import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
let hrs = today.getHours();
let mins = today.getMinutes();
let sec = today.getSeconds();
let text = "Morning";
let col = "red";
if (hrs >= 0 && hrs < 12) {
  text = "Morning";
} else if (hrs >= 12 && hrs < 18) {
  text = "Afternoon";
} else if (hrs >= 6 && hrs < 24) {
  text = "Evening";
}
//document.getElementById("txt").innerHTML=hrs+":"+mins+":"+sec

const customStyle = {
  color: "red"
};
if (text == "Morning") {
  customStyle.color = "red";
} else if (text == "Afternoon") {
  customStyle.color = "green";
} else if ((text = "Evening")) {
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>Good {text}</h1>,
  document.getElementById("root")
);
