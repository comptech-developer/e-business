$(document).ready(function(){

    var baseUrl = 'http://3.129.253.11/business/public/api';
    const urlregister =baseUrl +"/register"; 
 
   

 //listen submit event
$("#submit").on('click', function(event){
  
    event.preventDefault();
     var str = $('#firstName').val() +' '+  $('#lastName').val();
      //alert(str.substr(4));
var post = {

city:$('#city').val(),
street:$('#street').val(),
phone:$('#phoneNumber').val(),
name: str,
email:$('#email').val(),
password:$('#password').val(),
password_confirmation:$('#password_confirmation').val()

};


// send ajax
$.ajax({
url: urlregister, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(post), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
 
console.log(result);
    window.location.assign('index');
  
    //('#pin').prepend(obj.id);
},
error: function(xhr, resp, text) {
    //alert('erro saving');
console.log(xhr, resp, text);
}
});
});
});
