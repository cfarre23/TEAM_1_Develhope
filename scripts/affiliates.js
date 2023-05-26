var toggleHidden1 = document.getElementById("faqtoggle1");
var detailsButton1 = document.getElementById("faqbutton1");
var hiddenRow1 = document.getElementById("hiddenrow1");

var toggleHidden2 = document.getElementById("faqtoggle2");
var detailsButton2 = document.getElementById("faqbutton2");
var hiddenRow2 = document.getElementById("hiddenrow2");

var toggleHidden3 = document.getElementById("faqtoggle3");
var detailsButton3 = document.getElementById("faqbutton3");
var hiddenRow3 = document.getElementById("hiddenrow3");

var toggleHidden4 = document.getElementById("faqtoggle4");
var detailsButton4 = document.getElementById("faqbutton4");
var hiddenRow4 = document.getElementById("hiddenrow4");

var toggleHidden5 = document.getElementById("faqtoggle5");
var detailsButton5 = document.getElementById("faqbutton5");
var hiddenRow5 = document.getElementById("hiddenrow5");

hiddenRow1.style.display = "none";
toggleHidden1.addEventListener("click", function() {
  if (hiddenRow1.style.display === "none") {
    hiddenRow1.style.display = "flex";
    detailsButton1.innerHTML = "Hide<img src='images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
  } else {
    hiddenRow1.style.display = "none";
    detailsButton1.innerHTML = "Details<img src='images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
  }
});

hiddenRow2.style.display = "none";
toggleHidden2.addEventListener("click", function() {
  if (hiddenRow2.style.display === "none") {
    hiddenRow2.style.display = "flex";
    detailsButton2.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
  } else {
    hiddenRow2.style.display = "none";
    detailsButton2.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
  }
});

hiddenRow3.style.display = "none";
toggleHidden3.addEventListener("click", function() {
  if (hiddenRow3.style.display === "none") {
    hiddenRow3.style.display = "flex";
    detailsButton3.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
  } else {
    hiddenRow3.style.display = "none";
    detailsButton3.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
  }
});

hiddenRow4.style.display = "none";
toggleHidden4.addEventListener("click", function() {
  if (hiddenRow4.style.display === "none") {
    hiddenRow4.style.display = "flex";
    detailsButton4.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
  } else {
    hiddenRow4.style.display = "none";
    detailsButton4.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
  }
});

hiddenRow5.style.display = "none";
toggleHidden5.addEventListener("click", function() {
  if (hiddenRow5.style.display === "none") {
    hiddenRow5.style.display = "flex";
    detailsButton5.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
  } else {
    hiddenRow5.style.display = "none";
    detailsButton5.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
  }
});