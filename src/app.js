/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  const domainGenerator = (arr1, arr2, arr3) => {
    for (let i = 0; i < arr1.length; i++) {
      for (let x = 0; x < arr2.length; x++) {
        for (let j = 0; j < arr3.length; j++) {
          console.log(`${arr1[i]}${arr2[x]}${arr3[j]}.com`);
        }
      }
    }
  };
  domainGenerator(pronoun, adj, noun);
};
