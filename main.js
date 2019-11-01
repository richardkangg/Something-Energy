

document.getElementById("nav2").style.display = "none";
document.getElementById("foot").style.display = "none";

const hideFooter = function() {
    if (document.documentElement.scrollTop < 535 ) {
        document.getElementById("foot").style.display = "none";
        document.getElementById("nav2").style.display = "none";
  } else {
    document.getElementById("foot").style.display = "";
    document.getElementById("nav2").style.display = "";
  }
}

window.onscroll = function() {hideFooter()};

const redcan = document.getElementById("redcan");
const left = document.getElementById("left");
const right = document.getElementById("right");

const red = function() {
    console.log("red can clicked");
    document.getElementById("flavors").style.display = "none";
    document.getElementById("slides").style.display = "flex";
    document.querySelector(".slide1").style.display = "flex";
    document.querySelector(".leftarrow").style.visibility = "hidden";
}

const orange = function() {
    console.log("orange can clicked");
    document.getElementById("flavors").style.display = "none";
    document.getElementById("slides").style.display = "flex";
    document.querySelector(".slide2").style.display = "flex";
}

const blue = function() {
    console.log("blue can clicked");
    document.getElementById("flavors").style.display = "none";
    document.getElementById("slides").style.display = "flex";
    document.querySelector(".slide3").style.display = "flex";
    document.querySelector("#blueRight").style.visibility = "hidden";
}

const redRight = function() {
    document.querySelector(".slide1").style.display = "none";
    document.querySelector(".slide2").style.display = "flex";
}

const orangeLeft = function() {
    document.querySelector(".slide1").style.display = "flex";
    document.querySelector(".slide2").style.display = "none";
    document.querySelector(".leftarrow").style.visibility = "hidden";
}

const orangeRight = function() {
    document.querySelector(".slide2").style.display = "none";
    document.querySelector(".slide3").style.display = "flex";
    document.querySelector("#blueRight").style.visibility = "hidden";
}

const blueLeft = function() {
    document.querySelector(".slide3").style.display = "none";
    document.querySelector(".slide2").style.display = "flex";
}