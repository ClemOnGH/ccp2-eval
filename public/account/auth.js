let emailSubmit = document.querySelector('input[type="submit"]');
const emailInput = document.getElementById('email');
const form = document.getElementById('auth-form');

emailSubmit.onclick = async (e) => {
    e.preventDefault();
    fetch('/api/endpoint', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput.value }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (!data.exists || data.exists === 'null') {
                form.innerHTML = `<form action="/account/register" method="post"><label for="username">Nom d'utilisateur</label><input name="username" type="text" required/><label for="password">Mot de passe</label><input name="password" type="password" required/><input data-role="register" type="submit"/></form>`;
                document.querySelector('[data-role="register"]').onclick = (e) => {
                    e.preventDefault();
                    const registerInputs = document.querySelectorAll('form input:not([type="submit"])');
                    registerInputs.forEach((input) => {
                        console.log(input.name, input.value);
                    });
                };
            } else {
                form.innerHTML = `<form action="/account/register" method="post"><label for="password">Mot de passe</label><input name="password" type="password" required/><input data-role="login" type="submit"/></form>`;
                document.querySelector('[data-role="login"]').onclick = () => {
                    e.preventDefault();
                    console.log(document.querySelectorAll('form input:not([type="submit"])'));
                };
            }
            emailSubmit = document.querySelector('input[type="submit"]');
        })
        .catch((err) => console.error(err));
};
