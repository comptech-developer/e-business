	//http://localhost:8080/login ->http://localhost:9000/additemtocart
 $(document).ready(function(){
    
 
    const urlcoutry ="http://bc09dca1.ngrok.io/country"; 
    const urllogin ="http://bc09dca1.ngrok.io/login"; 
 
    $("#search-box").keyup(function(){
        var co = { countryName:$('#search-box').val()}
        $.ajax({
        type: "POST",
        url: urlcoutry,
        data:JSON.stringify(co),
        contentType: 'application/json',
        beforeSend: function(){
            $("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
        },
        success: function(data){
            var object = JSON.stringify(data);
      localStorage.setItem('object',object);

  console.log(localStorage.getItem('object'));

     var pdata = $.parseJSON(localStorage.getItem('object'));
  $('#countryId').val(pdata.country[0].countryId);
  $('#phoneNumber').val(pdata.country[0].countryCode);
  console.log(pdata.country[0].countryId)
            $.each(data.country,function(key,value){
            $("#suggesstion-box").show();
            $("#suggesstion-box").html('<li class="list-group-item active" >'+value.countryName+'</li>');
            $('#countryId').html('');
            $("#search-box").css("background","#FFF");

            console.log(data);
        });
        }
        });
    


 $('#suggesstion-box').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search-box').val($.trim(click_text[0]));
  $("#suggesstion-box").html('');
 });
 //listen submit event
$("#submit").on('click', function(){
    event.preventDefault();
      var str = $('#phoneNumber').val();
var post = {

countryId:$('#countryId').val(),
phoneNumber:(str.substr(4)),
 

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
 alert('login success');

 console.log(result);
 var objuser = JSON.stringify(result);
 //event.preventDefault();
  
      localStorage.setItem('objuser',objuser);
      sessionStorage.setItem('objuser',objuser);
  console.log(localStorage.getItem('objuser'));
  
 window.location.assign('vrf-login');


 
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})
 });
});
});
