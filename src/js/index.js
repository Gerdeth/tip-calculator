/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function calculateTip() {
  var billAmt = document.getElementById("Bill Amount").value;
  var serviceQuality = document.getElementById("service qual").value;
  var numberOfPeople = document.getElementById("people").value;
  if (billAmt == "" || serviceQuality == 0) {
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
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";

  document.getElementById("caluclate").onclick = function() {
    calculateTip();
  };
}
