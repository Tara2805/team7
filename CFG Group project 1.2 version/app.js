//nav bar

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
//Carousel

//contact us

document.getElementById("contactForm").addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Perform your form validation here
  if (validateForm()) {
    // If the form is valid, you can submit it using AJAX or perform any other necessary actions
    alert("Form submitted successfully!");
  }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Perform your form validation here
  if (validateForm()) {
      // If the form is valid, you can submit it using AJAX or perform any other necessary actions
      alert("Form submitted successfully!");
      // You can add your AJAX submission logic here if needed
  }
});
     