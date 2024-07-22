window.addEventListener("load", () => {
    const sliderEl = document.querySelector("#quiz_steps");
  
    // Function to update gradient based on slider value
    const updateGradient = () => {
      const tempSliderValue = sliderEl.value;
      const progress = (tempSliderValue / sliderEl.max) * 100;
      sliderEl.style.background = `linear-gradient(to right, #62A544 ${progress}%, #62A54440 ${progress}%)`;
    };
  
    // Initial update on page load
    updateGradient();
  
    // Event listener for input changes on the slider
    sliderEl.addEventListener("input", () => {
      updateGradient();
    });
  });