// Get the input field
var input = document.getElementById("wordInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    console.log("hello")
  }
});

