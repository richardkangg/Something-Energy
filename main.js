

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

const redcan = document.getElementById("redCan");
const left = document.getElementById("left");
const right = document.getElementById("right");

const allCans = function() {
    document.getElementById("flavors").style.display = "flex";
    document.getElementById("slides").style.display = "none";
}

const red = function() {
    document.getElementById("flavors").style.display = "none";
    document.getElementById("slides").style.display = "flex";
    document.querySelector(".slide1").style.display = "flex";
    document.querySelector(".leftArrow").style.visibility = "hidden";
}

const orange = function() {
    document.getElementById("flavors").style.display = "none";
    document.getElementById("slides").style.display = "flex";
    document.querySelector(".slide2").style.display = "flex";
}

const blue = function() {
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
    document.querySelector(".leftArrow").style.visibility = "hidden";
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

const contact2 = function() {
    document.querySelector(".contactBox2").style.display = "flex";
    document.querySelector(".close").style.display = "flex";
}

const close2 = function() {
    document.querySelector(".contactBox2").style.display = "none";
    document.querySelector(".close").style.display = "none";
}