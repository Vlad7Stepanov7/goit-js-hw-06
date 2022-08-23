const form = document.querySelector(`.login-form`);

const onFormSubmit = event => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    const formData = {
        email,
        password,
    };

    if (email === `` || password === ``) {
        alert(`Wrong login or password`);
    }
    
    console.log(formData);
    event.currentTarget.reset();
};

form.addEventListener(`submit`, onFormSubmit);

