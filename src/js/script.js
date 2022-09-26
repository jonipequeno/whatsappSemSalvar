/** @format */

function gerarLink() {
  
  let number = document.form_main.number.value;
  let message = document.form_main.message.value;
  let url = 'https://wa.me/';
  let end_url = `${url}${number}?text=${message}`;
  document.getElementById('end_url').innerText = ' ';
  document.getElementById('end_url').href = end_url;
}
