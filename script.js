function sendEmail() {

    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send(
        "service_wh1681a",
        "template_9of5b0s",
        templateParams
    )

    .then(() => {
        alert("Email sent !!");
    })

    .catch(() => {
        alert("Email not sent !!");
    });
}