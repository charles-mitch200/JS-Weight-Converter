const errorElem = document.querySelector(".js-error");
const inputElem = document.getElementById("weight-pounds");
const weightElem = document.getElementById("weight-kg");

// Initialize the errorTime variable
let errorTime;

// Reset the page after three seconds by clearing the input and output
const resetPage = (time) => {
    if (time === 2000) {
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
          errorElem.style.display = "none";
          inputElem.value = "";
          weightElem.innerText = `Your weight in kg is: `;
        }, time);
    } else if (time === 10000) {
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
          errorElem.style.display = "none";
          inputElem.value = "";
          weightElem.innerText = `Your weight in kg is: `;
        }, time);
    }
};

// Function to convert weight
const convertWeight = () => {
  const poundWeightValue = inputElem.value;

  if (poundWeightValue < 0 || isNaN(inputElem.value)) {
    errorElem.style.display = "block";
    resetPage(2000);
  } else {
    const kgWeightValue = (poundWeightValue * 0.4535924).toFixed(2);
    weightElem.innerText = `Your weight in kg is: ${+kgWeightValue}`;
    resetPage(10000);
  }
};

// Add event listener to the input
inputElem.addEventListener("input", convertWeight);
