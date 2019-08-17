$(document).ready(function(){ 
//verify /http://localhost:8080/verify
 
const urlVerify ="https://53394d17.ngrok.io/verify"; 
 
    var pdata = $.parseJSON(localStorage.getItem('obj1'));
  $('#userId').val(pdata.registered.userId);
  console.log(pdata.registered.userId);
  console.log(localStorage.getItem('obj1'));
 $('#vr').append(pdata.registered.verificationCode);
  console.log(pdata.registered.verificationCode);
  //form login
   var pdata = $.parseJSON(localStorage.getItem('obj1'));
  $('#userId').val(pdata.registered.userId);
  console.log(pdata.registered.userId);

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
  console.log(data);
 alert('succesfully');
 var objvrf = JSON.stringify(data);
   localStorage.setItem('objvrf',objvrf);
     
  console.log(localStorage.getItem('objvrf'));

console.log(objvrf);
 console.log(localStorage.getItem('obj1'));
window.location.assign('main');

},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})

});
});
