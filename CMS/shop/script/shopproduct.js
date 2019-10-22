 $(document).ready(function(){
const url = 'https://0afd2954.ngrok.io/shopproducts';  
const urlsold = 'https://0afd2954.ngrok.io/shopsoldproducts';

  $('#save').hide();
    var profl = {
      shopId:1

      
};
// send ajax
$.ajax({
url: url, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(profl), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
 //alert('succesfully');
   console.log(data);
    for(var i =0 ; i<data.length;i++){
      console.log(data[i].approvalStatus);
      if(data[i].approvalStatus==false){
      
          $('#color').html('label label-success');

      }else {
         $('#color').html('label label-danger');

   }
   
}

    $.each(data,function(key,value){
var links = '';
links += '<tr><td>'+value.id+'</td><td>'+value.productName+'</td><td>'+value.sellingPrice+'</td><td>'+value.stockSize+'</td><td>'+value.description+'</td><td id="color">'+value.approvalStatus+'</td><td>'+value.categoryName+'</td><td><img src="'+value.shopImage["0"].imageUrl+'" class="img-thumbnail" /></td><td><button class="btn btn-info btn-sm edit" data-id="'+value.id+'" data-pro="'+value.productName+'" data-sto="'+value.stockSize+'" data-sta="'+value.approvalStatus+'" data-cat="'+value.categoryName+'" data-de="'+value.description+'" data-pri="'+value.sellingPrice+'" >Edit</button>|<button class="btn btn-danger btn-sm delete" data-id="'+value.id+'">Delete</button></td></tr>';
$("#shopproduct").append(links);
});


},
error: function(xhr, resp, text) {
   // alert('erro saving');
console.log(xhr, resp, text);
}
})

//sold items
 var sold = {
      shopId:1

      
};
// send ajax
$.ajax({
url: urlsold, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(sold), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
 //alert('succesfully');
   console.log(data);
  
   for(var i =0 ; i<data.length;i++){
      console.log(data[i].approvalStatus);
      if(data[i].approvalStatus==false){
      

      }else {  }
   
}
    $.each(data,function(key,value){
var links = '';
links += '<tr><td>'+value.id+'</td><td>'+value.productName+'</td><td>'+value.sellingPrice+'</td><td>'+value.itemSold+'</td><td>'+value.paymentTime+'</td><td class"label label-success">'+value.referenceNumber+'</td><td>'+value.availableStock+'</td><td><button class="btn btn-success btn-sm edit" data-id="'+value.id+'"  >stock Inprogress   <i class="fa fa-spinner aria-hidden="true""></i></button></td></tr>';
$("#shopsold").append(links);
});

},
error: function(xhr, resp, text) {
   // alert('erro saving');
console.log(xhr, resp, text);
}
})
});

//delete product
$(document).on('click', '.delete', function(e){ 
  const urldelete =  'https://0afd2954.ngrok.io/shopdeleteproduct';
  e.preventDefault();
  var del = {
      productId:$(this).data('id'),
      shopId:1
};
// send ajax
$.ajax({
url: urldelete, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(del), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
 //alert('succesfully');
   console.log(data);
   
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})
})

//edit product
$(document).on('click', '.edit', function(e){ 
  //const urldelete =  'http://de3dec71.ngrok.io/shopdeleteproduct';
  $('#add').hide();
  $('#save').show();
  e.preventDefault();
  $('#productname').val($(this).attr('data-pro'));
  $('#quantity').val($(this).attr('data-sto'));
  $('#description').val($(this).attr('data-de'));
  $('#categories').val($(this).attr('data-cat'));
  $('#price').val($(this).attr('data-pri'));
  $('#id').val($(this).attr('data-id'));

 //save data
 $('#save').on('click',function(e){
 const urledit =  'https://0afd2954.ngrok.io/shopeditproduct'; 
   e.preventDefault();
   var pdata = $.parseJSON(localStorage.getItem('objvrf'))
 var cat = $('#categories option:selected').data('catid');
  var ed = {
       productId:$('#id').val(),
    productName:$('#productname').val(),
    shopId:pdata.shopStatus.shopId,
    quantity:$('#quantity').val(),
    sellingPrice:$('#price').val(),
    categoryId:cat,
    description:$('#description').val(),
    countryId:pdata.user.countryId
};
// send ajax
$.ajax({
url: urledit, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(ed), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
 //alert('succesfully');
   console.log(data);
   
},
error: function(xhr, resp, text) {
    
console.log(xhr, resp, text);

}
})
})
})





