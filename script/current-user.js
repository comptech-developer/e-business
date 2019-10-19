$(document).ready(function(){ 
 

  const url_product= "https://268f5fb1.ngrok.io/productdetails";
 
 load_curren_user()
 

 function load_curren_user(){

 	 var pdata = $.parseJSON(localStorage.getItem('objvrf'));
  $('#userFullName').append(pdata.user.userFullName);

  
 }
 
   
  //load product details
    var pdata = $.parseJSON(localStorage.getItem('object'));
    $("body").on("click",".detail",function(e){
    	 e.preventDefault();
      var pro = { productId:($(this).attr("data-id")),
   
                  countryId:pdata.country[0].countryId 
   

}
    
   console.log(JSON.stringify(pro));
   
    $.ajax({
        type: "POST",
        url: url_product,
        data:JSON.stringify(pro),

        contentType: 'application/json',
        success: function(data){
           console.log(data);
         
         $.each(data,function(key,value){
var read = '';
//populate to html product details
read += '<div class="row no-gutters"><aside class="col-sm-6 border-right"><article class="gallery-wrap">'; 
read += '<div class="img-big-wrap"><div> <a href="" data-fancybox=""><img src="'+value.images['0'].imageUrl+'" ></a></div></div>'; 
read += '</article></aside>';
read += '<aside class="col-sm-6"><article class="p-5"><h3 class="title mb-3">'+value.productName+'</h3>';
read += '<div class="mb-3"><var class="price h3 text-warning"><span class="currency">'+value.currencyAbbreviation+'&nbsp;</span><span class="num">'+value.price+'</span></var>'; 
read  += '<span>/per item</span></div> <dl><dt>Description</dt>';
read += '<dd><p>'+value.description+'</p></dd></dl>';
read += '<dd><p><strong>shop Name: &nbsp; </strong>'+value.shopName+'</p></dd>'; 
read += '<button data-toggle="modal" id="crt" data-id="'+value.productId+'" data-name="'+value.productName+'" data-price="'+value.price+'"  data-target="#exampleModal" class="btn btn  btn-md "><i class="fas  fa-money-bill-alt" ></i>&nbsp;Buy now</button>';


//$('div.modal-body').html(read);
$('#divdata').html(read);
       $('#myDetail').modal('show');
 
 });
        },
        error: function(xhr, resp, text) {
    //alert('erro saving');
console.log(xhr, resp, text);
        }
 

               });
})
  

 
 
});

