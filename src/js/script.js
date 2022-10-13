/** @format */

function gerarLink() {
  let number = document.form_main.number.value;
  let message = document.form_main.message.value;
  let pais = document.form_main.pais.value;
  let url = 'https://wa.me/';
  let end_url = `${url}${pais}${number}?text=${message}`;
  document.getElementById('end_url').innerText = ' Vamos para o Whatsapp? ';
  document.getElementById('end_url').href = end_url;
 
}
