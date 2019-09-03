let updateSlider = slideAmount => {
  const sliderDiv = document.getElementById("sliderAmount");
  sliderDiv.innerHTML = "£" + slideAmount;
};

let calAdminFee = slideAmount => {
  let adminFeeResult = slideAmount * 0.05;
  const adminFee = document.getElementById("adminFee");
  adminFee.innerHTML = "£" + Math.round(adminFeeResult * 100) / 100;
};

let calInterest = slideAmount => {
  let interestResult;
  const interestAmount = document.getElementById("interest");
  if (slideAmount > 6400 && slideAmount <= 7200) {
    interestResult = 500;
  } else if (slideAmount > 7200) {
    interestResult = 1000;
  } else {
    interestResult = 0;
  }
  interestAmount.innerHTML = "£" + interestResult;
};
