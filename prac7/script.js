// Highlight input when focused
function highlight(element) {
  element.classList.add("highlight");
}

// Remove highlight when focus lost
function removeHighlight(element) {
  element.classList.remove("highlight");
}

// Handle form submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh

  let fname = document.getElementById("firstname").value.trim();
  let uname = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value;
  let repass = document.getElementById("repassword").value;
  let terms = document.getElementById("terms").checked;
  let msg = document.getElementById("message");

  // Validation
  if (!fname || !uname || !pass || !repass) {
    msg.style.color = "red";
    msg.innerHTML = "Please fill all mandatory fields (*)";
    return;
  }

  if (email && !email.includes("@")) {
    msg.style.color = "red";
    msg.innerHTML = "Please enter a valid email address.";
    return;
  }

  if (pass !== repass) {
    msg.style.color = "red";
    msg.innerHTML = "Passwords do not match!";
    return;
  }

  if (!terms) {
    msg.style.color = "red";
    msg.innerHTML = "You must agree to the terms & conditions.";
    return;
  }

  // Success message
  msg.style.color = "green";
  msg.innerHTML = "Registration successful! Welcome, " + fname + ".";
});
