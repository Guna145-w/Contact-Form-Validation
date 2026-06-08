const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    if(name === ""){
        document.getElementById("nameError").innerText =
        "Name is required";
        isValid = false;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        document.getElementById("emailError").innerText =
        "Email is required";
        isValid = false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText =
        "Enter a valid email address";
        isValid = false;
    }

    if(message === ""){
        document.getElementById("messageError").innerText =
        "Message is required";
        isValid = false;
    }

    if(isValid){

        document.getElementById("successMessage").innerText =
        "Form submitted successfully!";

        form.reset();
    }

});