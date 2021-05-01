$(document).ready(function(){

//listen submit event
var baseUrl = 'http://3.129.253.11/business/public/api';
const url = baseUrl +"/additemtocart";
  var pdata = $.parseJSON(sessionStorage.getItem('objuser'));
 $('#exampleModal').on('show.bs.modal', function(e) {
  var product = $(e.relatedTarget).data('id');
  $("#product_id").val(product);
  var product = $(e.relatedTarget).data('price');
  $("#product_price").val(product);


});

 $("#cart-btn").on('click', function(){
    event.preventDefault();

  var cartdata = {

userId:pdata.login.userId,
productId:$('#product_id').val(),
sellingPrice:$('#product_price').val(),
quantity:$('#quantity').val(),

};
// send ajax

console.log(cartdata);

$.ajax({
url: url, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(cartdata), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
// you can see the result from the console
// tab of the developer tools
alert('succesfully');
//$('#display').html(result);
//$('#display').load("verify-user");
console.log(result);
 
   
    //('#pin').prepend(obj.id);
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}


});

});

});


