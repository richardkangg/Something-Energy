

// const beverage = document.body.querySelector('#beverage');
// let link1 = document.getElementById("mark1").offsetTop;
// console.log(link1);
// beverage.onClick = scroll(0, link1);
// beverage.onClick = scroll(0, 536);

window.onscroll = function() {hideFooter()};

const hideFooter = function() {
    if (document.documentElement.scrollTop > 535 ) {
    document.getElementById("foot").className = "";
    document.getElementById("header2").className = "";
  } else {
    document.getElementById("foot").className = "hide";
    document.getElementById("header2").className = "hideNav";
  }
}

const redcan = document.getElementById("redcan");

const red = function() {
    console.log("red can clicked");
    document.getElementById("flavors").className = "hide";
    document.getElementById("slides").className = "display";
    document.querySelector(".slide1").className = "display";
}

const orange = function() {
    console.log("orange can clicked");
    document.getElementById("flavors").className = "hide";
    document.getElementById("slides").className = "display";
    document.querySelector(".slide2").className = "display";
}

const blue = function() {
    console.log("blue can clicked");
    document.getElementById("flavors").className = "hide";
    document.getElementById("slides").className = "display";
    document.querySelector(".slide3").className = "display";
}