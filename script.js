let updateSlider = slideAmount => {
  const sliderDiv = document.getElementById("sliderAmount");
  sliderDiv.innerHTML = "£" + slideAmount;
};

let calAdminFee = slideAmount => {
  let adminFeeResult = slideAmount * 0.05;
  const adminFee = document.getElementById("adminFee");
  adminFee.innerHTML = "£" + Math.round(adminFeeResult * 100) / 100;
};
