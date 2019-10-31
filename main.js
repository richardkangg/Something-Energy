

const beverage = document.body.querySelector('#beverage');
let link1 = document.getElementById("mark1").offsetTop;
console.log(link1);
beverage.onClick = scroll(0, link1);
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