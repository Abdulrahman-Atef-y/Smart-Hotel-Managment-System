document.getElementById('phone').addEventListener('input', function (e) {
let value = e.target.value;

  // Keep only allowed characters
value = value.replace(/[^0-9+\-()\s]/g, '');

  // Count digits only
let digits = value.replace(/\D/g, '');

  // Limit to 15 digits
if (digits.length > 15) {
    // Remove extra digits while keeping formatting characters
    let result = '';
    let digitCount = 0;
    for (let i = 0; i < value.length; i++) {
    if (/\d/.test(value[i])) {
        if (digitCount >= 15) continue;
        digitCount++;
    }
    result += value[i];
    }
    value = result;
}

e.target.value = value;
});




document.getElementById("pss").addEventListener("click", function () {
const input = document.getElementById("lpss");
const icon = this.querySelector("ion-icon");

if (input.type === "password") {
    input.type = "text";
    icon.setAttribute("name", "lock-open"); // Optional: changes the icon
} else {
    input.type = "password";
    icon.setAttribute("name", "lock-closed");
}
});


document.getElementById("cpss").addEventListener("click", function () {
    const input = document.getElementById("lcpss");
    const icon = this.querySelector("ion-icon");
  
    if (input.type === "password") {
      input.type = "text";
      icon.setAttribute("name", "lock-open"); // Optional: changes the icon
    } else {
      input.type = "password";
      icon.setAttribute("name", "lock-closed");
    }
  });


document.getElementById("submit-btn").addEventListener("click", function (e) {
    const pass = document.getElementById("lpss").value;
    const confirm = document.getElementById("lcpss").value;
    const isChecked = document.getElementById("agree").checked;

    const errorMsg = document.getElementById("error-msg");
    const termsErrorMsg = document.getElementById("terms-error");

    // Hide previous error messages
    errorMsg.style.display = "none";
    termsErrorMsg.style.display = "none";

    // Check if passwords match
    if (pass !== confirm) {
      e.preventDefault(); // Stop form submission
    errorMsg.style.display = "block";
    return;
    }

    // Check if terms are accepted
    if (!isChecked) {
      e.preventDefault(); // Stop form submission
    termsErrorMsg.style.display = "block";
    return;
    }

    // Proceed with form submission
});




document.querySelector('.icon-close').addEventListener('click', function () {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.display = 'none';


});

document.querySelector('.register-link').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Hide login form
    document.querySelector('.form-box').style.display = 'none';
  
    // Show register form
    document.querySelector('.formboxrg').style.display = 'block';

    document.querySelector('.wrapper').style.height = '680px';
  });


document.querySelector('.register-linkk').addEventListener('click', function (e) {
    e.preventDefault();

    // Hide login form
    document.querySelector('.form-box').style.display = 'block';

    // Show register form
    document.querySelector('.formboxrg').style.display = 'none';

    document.querySelector('.wrapper').style.height = '500px';
});




document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login");
  const wrapper = document.querySelector(".wrapper");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Apply popup styles directly via JS
    wrapper.style.display = "block";
    wrapper.style.position = "fixed";
    wrapper.style.top = "50%";
    wrapper.style.left = "50%";
    wrapper.style.transform = "translate(-50%, -50%)";
    wrapper.style.zIndex = "1000";
    wrapper.style.backgroundColor = "white";
    
    wrapper.style.boxShadow = "0 8px 16px rgba(0,0,0,0.25)";
    
    

    document.querySelector('.form-box').style.display = 'block';
  
    // Show register form
    document.querySelector('.formboxrg').style.display = 'none';

    document.querySelector('.wrapper').style.height = '500px';

    
  });
});

