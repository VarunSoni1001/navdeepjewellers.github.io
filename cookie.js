const cookieBox = document.querySelector(".cookie-consent");
const acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = () => {
  // Setting cookie for 1 month with a specific path
  const domain = "navdeepjewellers.com";
  const cookiePath = "/"; // Replace "your-path" with the desired path
  document.cookie = `_consent=ndj; max-age=${60 * 60 * 24 * 30}; path=${cookiePath}`;

  if (document.cookie) { // If cookie is set
    cookieBox.classList.add("hide"); // Hide cookie box
  } else { // If cookie is not set, display an error alert
    alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
  }
}

let checkCookie = document.cookie.indexOf("_consent=ndj"); // Checking our cookie

// If cookie is set, hide the cookie box, else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
