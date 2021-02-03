$(document).ready(function(){


  

 if(localStorage.getItem('data') == null)
{
     

}else{ 


  var pdata =  JSON.parse(localStorage.getItem('data'));
  var sum = pdata.length;
  for(var i=0;i<pdata.length;i++){
  	var total = parseFloat(JSON.parse(localStorage.getItem('total')));
  	       var layout  = ''; 
        layout +=  '<li class="list-group-item d-flex justify-content-between  lh-condensed">';
           layout +=  '<img src="http://localhost/biashara/public/uploads/'+pdata[i].image+'" style="width:70px;" class="img-fluid rounded">';
            layout +=  '<div>';
             layout +=  '<h6 class="my-0">'+pdata[i].name+'</h6>';
              layout +=  '<small class="text-muted">Brief description</small>';
              layout += '</div>';
              layout += '<span class="text-muted justify-content-between">Tzs '+ pdata[i].selling_price +'</span>';
            layout += '</li>';
            
         $('#item-cart').append(layout)
         $('.total-value').html(total);
         $('#total-value').val(total);
            $('#sum').html(sum);
   
  }

}

$.ajax({
url: 'http://localhost/biashara/public/api/district', // url where to submit the request
type : "GET", // type of action POST || GET // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
// you can see the result from the console
// tab of the developer tools
 $.each(result.data,function(key,value){
$('#state').append('<option data-id='+value.id+'>'+value.name+'</option>');

});
console.log(result);
 
   
    //('#pin').prepend(obj.id);
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}


});

 var user =  JSON.parse(localStorage.getItem('objuser'));
  var user2 = user.token.user.name;
   var usr = user2.split(' ');
   $("#firstName").val(usr[0]);
   $("#lastName").val(usr[1]);
   $("#email").val(user.token.user.email);
    $("#city").val(user.city);
     $("#street").val(user.street);


  
});
