
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    if (!form || !messageBox ) return;

    form.addEventListener("submit",function(e) {
        e.preventDefault();

        const name = document.querySelector('[name="name"]').value.trim();
        const email = document.querySelector('[name="email"]').value.trim();
        const number = document.querySelector('[name="number"]').value.trim();
        const message = document.querySelector('[name="message"]').value.trim();

        if (!name || !email || !number || !message){
            alert("❌ Please fill all the fields!");

            messageBox.style.display = "block";
            messageBox.style.color = "red";
            messageBox.textContent = "Please fill all the fields!";
            return;
        }

        const phonePattern = /^[0-9]{10}$/;

        if (!number.match(phonePattern)) {
            alert("❌ Invalid phone nummber!");

            messageBox.style.display ="block";
            messageBox.style.color ="red";
            messageBox.textContent = "Enter a valid phone number!";
            return;
        }
        
        alert("✅ Your form has been submitted successfully!");

        messageBox.style.display = "block";
        messageBox.style.color = "green";
        messageBox.textContent = "Message sent succesfully!";

        form.reset();

        setTimeout(()  => {
            messageBox.style.display = "none";
        }, 5000);

    });
});

