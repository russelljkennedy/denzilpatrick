// Custom JS
const menu = document.getElementsByClassName("pop");
const popMenu = document.getElementsByClassName("pop-menu");
const logo = document.getElementsByClassName("rj-logo-container");

// Open and close the pop menu via the button
menu[0].onclick = function() {
  this.classList.toggle("is-open");
  let inner = this.nextElementSibling;
  if (inner.style.visibility == "visible") {
    inner.style.visibility = "hidden";
    inner.style.opacity = "0";
    logo[0].style.zIndex = "1";
  } else {
    inner.style.visibility = "visible";
    inner.style.opacity = "1";
    logo[0].style.zIndex = "4";
  }
};

// Cookies
function getCookie(name) {
  // Split cookie string and get name/val pairs
  const cookieArr = document.cookie.split(";");

  // Loop through array
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");

    // Remove whitespace
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}

const cookieBar = document.getElementById("rj-cookie-bar");
const cookieLink = document.getElementById("rj-cookie-agree");
const nav = document.getElementById("rj-nav");

cookieLink.onclick = function(e) {
  e.preventDefault();

  // Set the cookie and update the page elements
  document.cookie = "cookieAgree=True; path=/; max-age=3600";

  cookieBar.style.visibility = "hidden";
  cookieBar.style.opacity = "0";
  nav.style.transition = "bottom 0.9s linear";
  nav.style.height = "80px";
  nav.style.bottom = "0";
};

// Window loaded functions
window.onload = function() {
  // Hide pop menu until page is loaded
  popMenu[0].style.display = "block";

  // Check cookie statement and display or not
  const cookieAgree = getCookie("cookieAgree");
  if (cookieAgree != null) {
    cookieBar.remove();
    nav.style.height = "80px";
    nav.style.bottom = "0";
    nav.style.display = "block";
  } else {
    nav.style.bottom = "30px";
    nav.style.display = "block";
    cookieBar.style.display = "grid";
  }
};
