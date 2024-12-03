var i = 0;
var speed = 100;  // Speed of typing
var txt = "";  // Current text to display
var phrases = ["Organized", "Produced", "Presented"];
var currentPhrase = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero-heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(removeText, 1000);  // Delay before removing text
  }
}

function removeText() {
  var currentText = document.getElementById("hero-heading").innerHTML;
  document.getElementById("hero-heading").innerHTML = currentText.slice(0, -1);
  if (document.getElementById("hero-heading").innerHTML === "") {
    i = 0;
    currentPhrase++;
    if (currentPhrase < phrases.length) {
      txt = phrases[currentPhrase];
      typeWriter();
    }
  } else {
    setTimeout(removeText, speed);
  }
}

// Start typing the first phrase
txt = phrases[currentPhrase];
typeWriter();
