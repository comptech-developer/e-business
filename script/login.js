	//http://localhost:8080/login ->http://localhost:9000/additemtocart
 $(document).ready(function(){
    
 
    const urlcoutry ="https://a0384310.ngrok.io/country"; 
    const urllogin ="http://localhost/biashara/public/api/login"; 
  
 //listen submit event
$("#submit").on('click', function(){
    event.preventDefault();
    alert('click');
      
var post = {

email:$('#email').val(),
password:$('#password').val()
 

};
// send ajax
$.ajax({
url: urllogin, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(post), // post data || get data
dataType : 'json', // data type
contentType: 'application/json;charset=UTF-8',
   

success : function(result) {
// you can see the result from the console
 //alert('login success');

 console.log(result);
 var objuser = JSON.stringify(result);
      localStorage.setItem('objuser',objuser);
  console.log(localStorage.getItem('objuser'));
  
  var userid = result.token.user.id;
  console.log(userid);

  // for starting the session
    
                   $.ajax({
                url: './session.php', // url where to submit the request
                type : "POST", // type of action POST || GET
                 data: {'id':userid},
                dataType : 'text',

                success:function(data){
                 window.location.assign('main');
                    console.log(data);
                }

            });
},
error: function(xhr, resp, text) {
 //   alert('erro saving');
console.log(xhr, resp, text);
}
})
 });

});
