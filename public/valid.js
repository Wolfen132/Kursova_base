function maxLengthCheck(object) {
  if (object.value.length > object.max.length)
    object.value = object.value.slice(0, object.max.length)
}
function isNumeric (evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode (key);
  var regex = /[0-9]|\./;
  if ( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
function valid(){
  let valid = true;
  let showMsg = '';
  let formmodel = document.getElementById("js-input-model").value.trim();
  let formproc = document.getElementById("js-proc").value.trim();
  let formop = document.getElementById("js-op").value.trim();
  let formlan = document.getElementById("js-lan").value.trim();
  if (!formmodel) {
      showMsg = 'Впишіть назву моделі'
      valid = false;
  }
  if (!formproc) {
    showMsg = 'Впишіть назву сокета'
    valid = false;
}
  if (!formop) {
  showMsg = "Впишіть Чіпсет"
  valid = false;
}
  if (!formlan) {
  showMsg = "Вкажіть форм_фактор"
  valid = false;
}
  if (valid) {return valid} else {alert (showMsg)}
}
function validImg() {
  if (document.getElementById("productImage").value) {return true} 
  else {
      alert ("Загрузіть картинку")
      return false} ;
}