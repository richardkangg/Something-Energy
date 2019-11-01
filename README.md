#Something Energy Co.#

[Website Link](https://richardkangg.github.io/Something-Energy/)

###The Website###
This website showcases a sample energy drink brand website, equipped with three separate sections for product information, about the brand, company partners, as well as a tab for contact information. While each section draws attention to the relevant content, focus on the brand still remains apparent throughout.

###Process###
Initial design was rendered through Adobe XD, then implemented through HTML and CSS. With a heavy use of flexbox, each section was layered on top of each other to create a seamless one-page, scrollable design. A key element to a one-page design was a fixed header/footer, allowing access to navigation without having to return to the top of the page. While creating a lone, fixed navigation bar was simple enough, switching back and forth from a fixed navigation bar on the bottom of the page to the top of the page, depending on scroll, posed to be a struggle. With a lot of trial and error, Javascript came to be a solution.

```javascript
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
```

Using of scrollTop(), we were able to determine when to hide or display particular elements.

