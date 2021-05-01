$(document).ready(function(){  

   var baseUrl = 'http://3.129.253.11/business/public/api';
  const urlold = baseUrl +"/district";

const url = baseUrl +"/cart";
   var pdata = $.parseJSON(localStorage.getItem('objuser'));
 
  
$("#user-cart").on('click', function(){
    event.preventDefault();
    var profl = {

   userId:pdata.login.userId,


};
// send ajax
$.ajax({
url: url, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(profl), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
 
 alert('succesfully');
 var cart = JSON.stringify(data);
   localStorage.setItem('cart',cart);
     
  console.log(localStorage.getItem('cart'));

window.location.assign('cart');
 

   //$('#userId').html(pdata.userId);


},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})

});


 var puser = $.parseJSON(localStorage.getItem('cart'));
   
    //console.log(puser);
    $.each(puser.cart,function(index,value){

    $("#cart").append('<tr><td>'+index.imageCart +'</td><td><input type="number" id="quantity" value="'+value.quantity+'" class="form-control" style="width:70px;"></td><td>'+value.productName +'</td><td>'+value.price +'</td><td><button class="btn btn-primary btn-xs"><i class="fas fa-edit"></i></button>&nbsp;<button class="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i></button></td></tr>');

  });
    $.each(puser.cart, function () {
$.each(this, function (name, value) {
console.log(name + '=' + value);
$.each(this.index, function (i, j) {
});
});
});

});
