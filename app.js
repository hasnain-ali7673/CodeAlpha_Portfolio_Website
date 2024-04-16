let header = document.querySelector(".header");

header.classList.toggle("sticky", window.scrollY > 100);

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

export function handleStickyNavbar() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      // Adjust the scroll position threshold as needed
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}

export function handleTabSwitching() {
  var tablinks = document.getElementsByClassName("tab_links");
  var tabcontents = document.getElementsByClassName("tabs_contents");

  function opentab(tabname, event) {
    for (let tablink of tablinks) {
      tablink.classList.remove("active_link");
    }

    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active_tab");
    }

    event.currentTarget.classList.add("active_link");

    document.getElementById(tabname).classList.add("active_tab");
  }

  // Attach event listeners to tab links
  for (let tablink of tablinks) {
    tablink.addEventListener("click", function (event) {
      var tabname = event.currentTarget.getAttribute("data-tab");
      opentab(tabname, event);
    });
  }
}
