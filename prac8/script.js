// 🎯 Gym Admission Form Validation and Event Handling

const form = document.getElementById("gymForm");
const message = document.getElementById("message");

// Highlight input on focus
document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("focus", () => el.classList.add("highlight"));
  el.addEventListener("blur", () => el.classList.remove("highlight"));
});

// Validation on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  // Basic Validation
  if (!name || !email || !phone || !dob || !password || !confirmPassword) {
    message.style.color = "red";
    message.textContent = "⚠️ Please fill all required fields!";
    return;
  }

  // Email Validation
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    message.style.color = "red";
    message.textContent = "⚠️ Invalid email address!";
    return;
  }

  // Phone Validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    message.style.color = "red";
    message.textContent = "⚠️ Phone number must be 10 digits!";
    return;
  }

  // Password Validation
  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "⚠️ Password must be at least 6 characters!";
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "⚠️ Passwords do not match!";
    return;
  }

  if (!terms) {
    message.style.color = "red";
    message.textContent = "⚠️ You must agree to the terms & conditions!";
    return;
  }

  // If all good
  message.style.color = "green";
  message.textContent = "✅ Registration Successful! Welcome to the Gym!";
  form.reset();
});
