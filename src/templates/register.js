import { registerNewUser } from '../lib/auth';

// file register.js
function register(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const subTitle = document.createElement('h3');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputCountry = document.createElement('input');
  const inputRegion = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputPassConfirm = document.createElement('input');
  const buttonRegister = document.createElement('button');

  inputName.placeholder = 'Nombre y Apellido';
  inputEmail.placeholder = 'Correo electrónico';
  inputCountry.placeholder = 'Pais';
  inputRegion.placeholder = 'Región';
  inputPass.placeholder = 'Crea una contraseña';
  inputPassConfirm.placeholder = 'Confirma tu contraseña';

  title.textContent = 'Registro';
  subTitle.textContent = 'Ingresa los siguientes datos';
  buttonRegister.textContent = 'Registrate';
  buttonReturn.textContent = 'Atrás';

  buttonRegister.addEventListener('click', () => {
    registerNewUser(inputEmail.value, inputPass.value)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log('register user: ', user);
        navigateTo('/wall');
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('erroCode: ', errorCode);
        console.log('errorMessage: ', errorMessage);
      // ..
      });
  });

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputName, inputCountry, inputRegion, inputEmail, inputPass, inputPassConfirm);
  section.append(title, subTitle, form, buttonRegister, buttonReturn);
  return section;
}

export default register;