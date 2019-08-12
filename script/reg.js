$(document).ready(function(){

    const urlcountry ="http://929d8a45.ngrok.io/country"; 
    const urlregister ="http://929d8a45.ngrok.io/registration"; 
    event.preventDefault();
    //http://53177a43.ngrok.io/country
    
    $("#search-box").keyup(function(){
        var co = { countryName:$('#search-box').val()}
        $.ajax({
        type: "POST",
        url: urlcountry,
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
      //alert(str.substr(4));
var post = {

countryId:$('#countryId').val(),
//countryId:$('#search-box').val(),
phoneNumber:(str.substr(4)),
firstName:$('#firstName').val(),
lastName:$('#lastName').val(),
email:$('#email').val()

};


// send ajax
$.ajax({
url: urlregister, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(post), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
// you can see the result from the console
// tab of the developer tools
alert('succesfully saving you will get sms notification soon');
//$('#display').html(result);
//$('#display').load("verify-user");
console.log(result);
var obj1 = JSON.stringify(result);
 //event.preventDefault();
  
      localStorage.setItem('obj1',obj1);
      //$('#display').load("verify-user"); 
   $('#vr').append(localStorage.getItem('obj1'));
  console.log(localStorage.getItem('obj1'));
//console.log(result);
window.location.assign('vrf-register');
   
    //('#pin').prepend(obj.id);
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
});
});
});
});