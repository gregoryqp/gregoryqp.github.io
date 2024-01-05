// let slider = document.getElementById("myRange");
// let output = document.getElementById("demo");

// output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;

//   slider.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
// };
const sliderEl = document.querySelector("#range2");
const sliderValue = document.querySelector(".value2");

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;
  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #44a844 ${progress}%, #d1d1d1 ${progress}%)`;
});

const sliderEl2 = document.querySelector("#range3");
const sliderValue2 = document.querySelector(".value3");

sliderEl2.addEventListener("input", (event) => {
  const tempSliderValue2 = event.target.value;
  sliderValue2.textContent = tempSliderValue2;

  const progress2 = tempSliderValue2;

  sliderEl2.style.background = `linear-gradient(to right, #44a844 ${progress2}%, #d1d1d1 ${progress2}%)`;
});
