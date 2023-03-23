document.getElementById('hidden_action_form').action = 'https://formsubmit.co/c2a5b18fb5c328868b0b73fbac69639c';


// get the URL query string
const queryString = window.location.search;

// parse the query string into a key-value object
const formData = {};
queryString.slice(1).split("&").forEach(function(item) {
  const pair = item.split("=");
  formData[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
});

// update the HTML elements with the form data
document.getElementById("name").textContent = formData["name"];
document.getElementById("email").textContent = formData["email"];
document.getElementById("phoneNumber").textContent = formData["phoneNumber"];