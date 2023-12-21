const form = document.querySelector('.login-form');
// const inputs = document.querySelectorAll('input');
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

  //   inputs.forEach((item) => {
  //     item.value = '';
  //   });

  form.reset();
  console.log(obj);
}
