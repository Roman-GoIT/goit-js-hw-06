
const form = document.querySelector('.login-form');

form.addEventListener('submit',  handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const { elements: { email, password }} = evt.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return console.log("Fill in all the fields please")
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    evt.currentTarget.reset();
}