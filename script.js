const slider = document.getElementById("repaySlider");

let updateSlider = slideAmount => {
  const sliderDiv = document.getElementById("sliderAmount");
  sliderDiv.innerHTML = "£" + slideAmount;
  let defaultMonthlyPay = Math.round(slideAmount * 0.1 * 100) / 100;
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

let monthlyPay = slideAmount => {
  const monthlyPay = document.getElementById("monthlyPay");
  monthlyPay.innerHTML = "£" + slideAmount;
};

let howLongItTakes = slideAmount => {
  const takeHowLong = document.getElementById("takeHowLong");
  let loanAmount = document.getElementById("slide").value;
  let loanAmountNum = parseInt(loanAmount);
  let payBackAmount = document.getElementById("repaySlider").value;
  let payBackAmountNum = parseFloat(payBackAmount);
  let adminFee = document.getElementById("adminFee").innerHTML;
  let interestFee = document.getElementById("interest").innerHTML;
  let adminFeeNum = adminFee.replace("£", "");
  let interestFeeNum = interestFee.replace("£", "");
  let adminFeeTotal = parseFloat(adminFeeNum);
  let interestFeeTotal = parseInt(interestFeeNum);
  let months =
    (loanAmountNum + adminFeeTotal + interestFeeTotal) / payBackAmountNum;
  takeHowLong.innerHTML = Math.ceil(months) + " months";
};
