$(document).ready(function(){


 $(document).on('click','#cart',function(event){  
 	
  swal({text: "Your cart has been added to bag!", type: 
"success"}).then(function(){ 
   location.reload();
   }
);
 	    event.preventDefault();
      var total = '';
 	 var cartdata = 
 	 {


productId:$(this).attr('data-id'),
selling_price:$(this).attr('data-price'),
image:$(this).attr('data-img'),
name:$(this).attr('data-name'),
quantity: 1
 
}

let carts;
if(localStorage.getItem('data') == null)
{
	carts = [];
}else{

	carts = JSON.parse(localStorage.getItem('data'));
}


       carts.push(cartdata);  
      localStorage.setItem('data',JSON.stringify(carts));
      if(localStorage.getItem('total') == null){
      	total = $(this).attr('data-price');
      	localStorage.setItem('total',total);
      }else{
      	  var sum = parseFloat(JSON.parse(localStorage.getItem('total')));
      	  	total = parseFloat($(this).attr('data-price'));
         totalitem = total + sum; 
        localStorage.setItem('total',totalitem);
      }
     

 
// send ajax

console.log();




 

});

 if(localStorage.getItem('data') == null)
{

}else{ 
  var cart =  JSON.parse(localStorage.getItem('data'));
  console.log(cart);
   $("#cartsize").append(cart.length);

}

$(document).on('click','#shopstatus',function(event){  
 	    event.preventDefault();

 if(localStorage.getItem('data') == null)
{
     var layout = "<tr><td colspan='5' class='text-center text-danger'>No cart available</td></tr>";
   $ ('#cart-items').append(layout);
         $('#myModal').modal('show');

}else{ 
  var pdata =  JSON.parse(localStorage.getItem('data'));
  
  for(var i=0;i<pdata.length;i++){
  	var total = parseFloat(JSON.parse(localStorage.getItem('total')));
  	


  	var layout = "<tr id='product-"+ pdata[i].productId+"'><td class='col-sm-6 col-md-6'><div class='media'>" +
        "<img class='d-flex align-self-center ' style='width:90px;' src='http://localhost/biashara/public/uploads/"+pdata[i].image+"' alt=''>" +
        "<div class='media-body'>" +
        "<h5 class='mt-0'>"+pdata[i].name+"</h5>" +
        "</div></div></td><td class='col-sm-2 col-md-2' style='text-align: center'>" +pdata[i].quantity+
        "<td class='col-sm-2 col-md-2 text-center'><strong>TZS "+ pdata[i].selling_price +"</strong></td>" +
        "<td class='col-sm-2 col-md-2 text-center' data-item-total-value='"+ pdata[i].selling_price +"'><strong>"+ pdata[i].selling_price +"</strong></td>" +
        "<td class='col-sm-2 col-md-2'>" +
        "<a href='javascript:;' class='btn btn-danger fa fa-trash' data-cesta-feira-delete-item='"+pdata[i].productId +"'><span class='sr-only'>Remove</span></a>" +
        "</td></tr>";
      $('#total-value').html(total);
    $('#cart-items').append(layout);
    
         $('#myModal').modal('show');

         $("#myModal").on("hidden.bs.modal", function(){
    $("#cart-items").html("");

  });
   
  }



}


});

//push data to server
$(document).on('click','#shop',function(event){  
 	    event.preventDefault();

 var cart =  JSON.parse(localStorage.getItem('data'));
 var user =  JSON.parse(localStorage.getItem('objuser'));
 var customer_id = user.token.user.customer_id;
 var total =  JSON.parse(localStorage.getItem('total'));
 var delivery = {
 	"district_id": "1",
 	 "location":"mikocheni",
 	  "street":"boko juu",
 	  "zipcode":"11000",
 	  "delivery_note":"drop the package as per adddress"
 }
  
   var payment_token = "tok_1IGAlDHkoFwg6Jpzklh19KrX";
       
   
    var order = {
    	cart,
    	delivery,
    	total,
    	payment_token,
    	customer_id


    }
    console.log(JSON.stringify(order));

    $.ajax({
url: 'http://localhost/biashara/public/api/order', // url where to submit the request
type : "POST",
data :JSON.stringify(order), // type of action POST || GET // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
 processData: false,
success : function(result) {

console.log(result);

},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}


});

});

//checkout

$(document).on('click','#checkout',function(event){  
 	    event.preventDefault();

 	     window.location.assign('checkout');
 
});



});


