

// const footer = document.body.querySelector('.footer');

// document.body.onscroll = function() {
//     const scroller = document.body.scrollTop();
//     let position = scroll(0, 650);
//     console.log(scroller);
//     if (scroller > position) {
//         footer.removeClass('hide');
//     }
//         else {footer.addClass('hide');

//         }
//     };

const beverage = document.body.querySelector('#beverage');
beverage.onClick = scroll(0, 610);

window.onscroll = function() {hideFooter()};

const hideFooter = function() {
    if (document.documentElement.scrollTop > 610) {
//   if (document.body.scrollTop > 610 || document.documentElement.scrollTop > 610) {
    document.getElementById("foot").className = "hide";
  } else {
    document.getElementById("foot").className = "";
  }
}