/* eslint-disable */

import "../style/index.scss";

function calculateTip() {
  var billAmt = document.getElementById("billamount").value;
  var serviceQuality = document.getElementById("servicequal").value;
  var numberOfPeople = document.getElementById("people").value;
  if (billAmt == "" || serviceQuality == "--Choose an Option--") {
    alert("Please enter values");
    return;
  }
  if (numberOfPeople == "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  var total = (billAmt * serviceQuality) / numberOfPeople;
  //   round total to 2 decimal places
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
