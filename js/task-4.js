const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const email = evt.target.elements.email.value.trim();
  const password = evt.target.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const obj = {
    email,
    password,
  };

  form.reset();
  console.log(obj);
}
