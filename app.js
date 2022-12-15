const input = document.querySelector(".optinal-box .input input");
const tips = document.querySelectorAll(".tip-holder-amount .tip-amount");
const people = document.querySelector(".people input");
const tipOne = document.querySelector(".tip-for-one .amount .price");
const allTip = document.querySelector(".tip-for-all .amount .price");
const reast = document.querySelector("button.reset");
let total = 0,
  persntage = 0,
  peoples = "",
  click = false;

input.value = "";
people.value = "";

input.addEventListener("input", () => {
  total = input.value;
  calc();
});

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tips.forEach((tip) => {
      tip.classList.remove("active");
    });
    tip.classList.add("active");

    if (tip.nodeName === "BUTTON") {
      persntage = tip.innerHTML.slice(0, -1);
      calc();
    } else {
      tip.addEventListener("input", () => {
        persntage = tip.value;
        calc();
      });
    }
  });
});

people.addEventListener("input", () => {
  peoples = people.value;
  calc();
  addAndcheck();
});

people.addEventListener("focus", () => addAndcheck());

function addAndcheck() {
  if (peoples.length === 0) {
    document.querySelector(".optinal-box").classList.add("error");
  } else {
    document.querySelector(".optinal-box").classList.remove("error");
  }
}

function calc() {
  let onePesone = (Number(total) * Number(persntage)) / 100;
  let allpeople = onePesone * Number(peoples);
  tipOne.innerHTML = onePesone.toFixed(1);
  allTip.innerHTML = allpeople.toFixed(1);
}

reast.addEventListener("click", () => {
  tipOne.innerHTML = "0.00";
  allTip.innerHTML = "0.00";
  input.value = "";
  people.value = "";
  document.querySelector(".input-pers").value = "";
  (total = 0), (persntage = 0), (peoples = 0), (click = false);
});
