document.addEventListener('DOMContentLoaded', function () {
  var hiImRamezElement = document.querySelector('h1');
  var introTextElement = document.querySelector('.intro-text');

  var hiImRamezText = "Hi, ";
  var iam = "I'm Ramez";
  var introText = "I'm a Computer Science student currently pursuing a Bachelor’s of Science at Saint Louis University. Thanks for checking out my website!";

  var hiImRamezIndex = 0;
  var iamIndex = 0;
  var introIndex = 0;

  // Check if the typing has already occurred
  var typingCompleted = localStorage.getItem('typingCompleted');

  if (!typingCompleted) {
    function typeHiImRamez() {
      if (hiImRamezIndex < hiImRamezText.length) {
        hiImRamezElement.innerHTML += hiImRamezText.charAt(hiImRamezIndex);
        hiImRamezIndex++;
        setTimeout(typeHiImRamez, 80);
      } else {
        typeIamText();
      }
    }

    function typeIamText() {
      if (iamIndex < iam.length) {
        hiImRamezElement.innerHTML += iam.charAt(iamIndex);
        iamIndex++;
        setTimeout(typeIamText, 100);
      } else {
        typeIntroText();
      }
    }

    function typeIntroText() {
      if (introIndex < introText.length) {
        introTextElement.innerHTML += introText.charAt(introIndex);
        introIndex++;
        setTimeout(typeIntroText, 30);
      } else {
        // Set the flag in localStorage to indicate that typing has occurred
        localStorage.setItem('typingCompleted', 'true');
      }
    }

    typeHiImRamez();
  } else {
    // If typing has already occurred, simply set the content without the typing effect
    hiImRamezElement.innerHTML = hiImRamezText + iam;
    introTextElement.innerHTML = introText;
  }
});
