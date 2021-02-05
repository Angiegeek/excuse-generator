/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log();
};

let generateExcuse = () => {
  let pronoun = ["Mi", "El"];
  let subject = ["perro", "gato", "maestro", "perico", "papá"];
  let action = ["se comio", "rompio", "araño", "enseño", "canto"];
  let what = ["la tarea", "el sillon", "la comida", "la cancion"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whtIndx = Math.floor(Math.random() * what.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    what[whtIndx]
  );
};
