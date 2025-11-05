function performOperations() {
  let str = document.getElementById("userString").value;
  let paragraph = document.getElementById("userParagraph").value;
  let output = document.getElementById("output");

  // Clear previous results
  output.innerHTML = "";

  if (!str && !paragraph) {
    output.innerHTML = "<p style='color:red;'>Please enter at least one input.</p>";
    return;
  }

  // Basic string operations
  if (str) {
    output.innerHTML += `<h3>Basic String Operations</h3>`;
    output.innerHTML += `<div class="result"><b>Original String:</b> ${str}</div>`;
    output.innerHTML += `<div class="result"><b>Length:</b> ${str.length}</div>`;
    output.innerHTML += `<div class="result"><b>Character at index 2:</b> ${str.charAt(2)}</div>`;
    output.innerHTML += `<div class="result"><b>Uppercase:</b> ${str.toUpperCase()}</div>`;
    output.innerHTML += `<div class="result"><b>Lowercase:</b> ${str.toLowerCase()}</div>`;
    output.innerHTML += `<div class="result"><b>Substring (0–5):</b> ${str.substring(0, 5)}</div>`;
    output.innerHTML += `<div class="result"><b>Index of 'a':</b> ${str.indexOf('a')}</div>`;
    output.innerHTML += `<div class="result"><b>Split into words:</b> ${str.split(" ").join(", ")}</div>`;
    output.innerHTML += `<div class="result"><b>Replace first word with 'Hi':</b> ${str.replace(/^\S+/, "Hi")}</div>`;

    // Reverse string
    let reversed = str.split("").reverse().join("");
    output.innerHTML += `<h3>Case Study 1 - Reversed String</h3>`;
    output.innerHTML += `<div class="result">${reversed}</div>`;
  }

  // Count vowels in paragraph
  if (paragraph) {
    output.innerHTML += `<h3>Case Study 2 - Count Vowels</h3>`;
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of paragraph) {
      if (vowels.indexOf(char) !== -1) {
        count++;
      }
    }
    output.innerHTML += `<div class="result"><b>Paragraph:</b> ${paragraph}</div>`;
    output.innerHTML += `<div class="result"><b>Number of Vowels:</b> ${count}</div>`;
  }
}

function clearOutput() {
  document.getElementById("userString").value = "";
  document.getElementById("userParagraph").value = "";
  document.getElementById("output").innerHTML = "";
}
