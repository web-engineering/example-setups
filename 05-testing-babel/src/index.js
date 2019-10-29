// Hook up the conversion to input and ouput
import './style.css';

import { validRomanChar, romanToNumber } from "./roman.js";

let inputField = document.getElementById("input");
let outputDiv = document.getElementById("output");

const allowedKeys = ["ArrowLeft", "ArrowRight", "Backspace"];

inputField.addEventListener("keydown", ev => {
  console.log(`somebody typed in ${ev.key}`);
  // if (! (allowedKeys.includes(ev.code) || validRomanChar(ev.key))  {
  //   ev.preventDefault();
  // }
});

inputField.addEventListener("keyup", ev => {
  console.log(`should convert ${ev.target.value}`);
  try {
    outputDiv.innerText = romanToNumber(inputField.value);
    outputDiv.classList.remove("error");
  } catch (e) {
    outputDiv.innerText = e.message;
    outputDiv.classList.add("error");
  }
});
