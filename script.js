"use strict";

// 13 задание

const form = document.querySelector("form");
const entryEl = document.querySelector(".entry");
const entryRegister = document.querySelector(".entry_register");
const emailEl = document.querySelector(".email");

form.addEventListener("input", () => {
  if (entryRegister.value === entryEl.value) {
    entryEl.setAttribute("style", "outline: 1px solid green");
    entryRegister.setAttribute("style", "outline: 1px solid green");
  } else {
    entryEl.setAttribute("style", "outline: 1px solid red");
    entryRegister.setAttribute("style", "outline: 1px solid red");
  }
  
});

form.addEventListener("submit", e => {
  if (entryEl.value === "") {
    e.preventDefault();
    entryEl.setAttribute("style", "outline: 1px solid red");
    entryRegister.setAttribute("style", "outline: 1px solid red");
  }
  if (emailEl.value === "") {
    e.preventDefault();
    emailEl.setAttribute("style", "outline: 1px solid red");
  }
});

form.addEventListener("input", () => {
  if (emailEl.value === "") {
    e.preventDefault();
    emailEl.setAttribute("style", "outline: 1px solid red");
  } else {
    emailEl.removeAttribute("style");
  }
});

// 14 задание

const stars = document.querySelectorAll(".star");

function rate(rating) {
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("rating");
    } else {
      stars[i].classList.remove("rating");
    }
  }
}
