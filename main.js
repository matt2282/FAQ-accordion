function buttonPress(id, imgid) {
  var currentid = localStorage.getItem("currentid");
  var currentimgid = localStorage.getItem("currentimgid");
  if (currentid) {
    var currentPanel;
    try {
      currentPanel = document.getElementById(currentid);
       if (currentid !== id) {
    currentPanel.style.display = "none";
    document.getElementById(currentimgid).src = "assets/images/icon-plus.svg";
  }
    } catch {}
  }
  const panel = document.getElementById(id);
  if (window.getComputedStyle(panel).display == "none") {
    panel.style.display = "block";
    localStorage.setItem("currentid", id);
    localStorage.setItem("currentimgid", imgid);
  } else if (window.getComputedStyle(panel).display == "block") {
    panel.style.display = "none";
  }
 
  swapImage(imgid);
}
function swapImage(id) {
  const questionImage = document.getElementById(id);
  if (questionImage.getAttribute("src") == "assets/images/icon-plus.svg") {
    questionImage.src = "assets/images/icon-minus.svg";
  } else {
    questionImage.src = "assets/images/icon-plus.svg";
  }
}
