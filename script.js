const slider = document.getElementById("repaySlider");

let updateSlider = slideAmount => {
  const sliderDiv = document.getElementById("sliderAmount");
  sliderDiv.innerHTML = "£" + slideAmount;
  let defaultMonthlyPay = Math.round(slideAmount * 0.1 * 100) / 100;
  slider.value = defaultMonthlyPay.toFixed(2);
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

let monthlyPay = slideAmount => {
  let monthlyPayAmount;
  const monthlyPay = document.getElementById("monthlyPay");
  monthlyPay.innerHTML = "£" + slideAmount * 0.1;
};

function SetMax(slideAmount) {
  if ("max" in slider) {
    // Google Chrome, Safari from version 5 and Opera
    slider.min = slideAmount * 0.1;
    slider.max = slideAmount;
  } else {
    // Safari before version 5
    slider.min = slideAmount * 0.1;
    slider.setAttribute("max", slideAmount);
  }
}
