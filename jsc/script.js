

function checkInput1() {
  let messege = document.getElementById('mess');
  let err = document.getElementById('mess-err');

  if(messege.value.length < 6 && messege.value != ''){
     err.style.display="block"}
     else {
     err.style.display="none"};
    }


  function checkInput2() {
    let name = document.getElementById('name');
    let err = document.getElementById('name-err');
    
    if(!name.checkValidity() && name.value != ''){
      err.style.display="block"}
      else {
      err.style.display="none"};
    }
    
  function checkInput3() {
    let mail = document.getElementById('email');
    let err = document.getElementById('email-err');
      
    if(!mail.checkValidity() && mail.value != ''){
      err.style.display="block"}
      else {
      err.style.display="none"};
    }


