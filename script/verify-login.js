$(document).ready(function(){ 
   
  const urlVerify ="http://929d8a45.ngrok.io/verify"; 
  
   var pdata = $.parseJSON(localStorage.getItem('objuser'));
  $('#userId').val(pdata.login.userId);
  console.log(pdata.login.userId);
    console.log(localStorage.getItem('objuser'));

$("#send").on('click', function(){
    event.preventDefault();
var verify = {

userId:$('#userId').val(),
verificationCode:$('#verificationCode').val(),

};
// send ajax
$.ajax({
url: urlVerify, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(verify), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
 
 alert('succesfully');
 var objvrf = JSON.stringify(data);
   localStorage.setItem('objvrf',objvrf);
     
  console.log(localStorage.getItem('objvrf'));


console.log(objvrf);
window.location.assign('main');

},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})

});
});
