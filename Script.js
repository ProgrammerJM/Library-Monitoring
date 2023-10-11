// uglified: const scriptURL="https://script.google.com/macros/s/AKfycbxt-j-GxlaXwW3WnwgASKytf8T5qaI0GS6kFoZpk29-4afESHPJP1nub7mQrL9PWA0/exec",form=document.forms["submit-to-google-sheet"],msg=document.getElementById("msg");form.addEventListener("submit",a=>{a.preventDefault(),fetch(scriptURL,{method:"POST",body:new FormData(form)}).then(()=>{msg.innerHTML="Welcome To ICHEM Library!",setTimeout(function(){msg.innerHTML=""},1e3),form.reset()}).catch(a=>console.error("Error!",a.message))});

const scriptURL =
  'https://script.google.com/macros/s/AKfycbxt-j-GxlaXwW3WnwgASKytf8T5qaI0GS6kFoZpk29-4afESHPJP1nub7mQrL9PWA0/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
const progressBar = document.getElementById('progress-bar');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check if all required fields are filled out before proceeding
  if (validateForm()) {
    // Reset the progress bar and start the animation
    progressBar.style.width = '0%';
    move();

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          return response.text(''); // assuming the response contains a text message
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        msg.innerHTML = 'Welcome To ICHEM Library!'; // Display a success message
        setTimeout(function () {
          msg.innerHTML = '';
          progressBar.style.width = '0%'; // Reset the progress bar
        }, 1000);
        form.reset();
      })
      .catch((error) => {
        msg.innerHTML = 'Error occurred during submission.';
        progressBar.style.width = '0%'; // Reset the progress bar in case of an error
      });
  } else {
    // Display an error message if not all required fields are filled out
    msg.innerHTML = 'Please fill out all required fields.';
  }
});

function validateForm() {
  // Get all required input elements
  const requiredInputs = form.querySelectorAll('[required]');

  // Check if all required fields are filled out
  for (const input of requiredInputs) {
    if (!input.value.trim()) {
      return false;
    }
  }

  return true;
}

let i = 0;
function move() {
  if (i === 0) {
    i = 1;
    let width = 1;
    let id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progressBar.style.width = width + '%';
      }
    }
  }
}

// Practicing onFocus and onBlur in input 'Name'
const inputText = document.getElementById('name');

function onFocus() {
  inputText.style.outlineStyle = 'solid';
  inputText.style.outlineWidth = '1px';
  inputText.style.outlineColor = 'black';
}
function onBlur() {
  inputText.style.outlineStyle = 'none';
}

inputText.addEventListener('focus', onFocus);
inputText.addEventListener('blur', onBlur);
