$(document).ready(function(){

 
const Url= 'http://localhost/biashara/public/api/category';
const Url2 = 'http://localhost/biashara/public/api/product';
const Url3 = 'http://localhost/biashara/public/api/product';
const Url4 = 'http://localhost/biashara/public/api/product';
 
//initialise function
 
load_recomendedproducts(Url3);
load_productdetails(Url4);
load_items(Url2);
//load_randomproducts(Url3);
// body -> countryid ->userId
post_data();

function post_data(){

	
  
  $.ajax({
url: Url, // url where to submit the request
type : "GET", // type of action POST || GET
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
  console.log(result);
// you can see the result from the console
// tab of the developer tools
 //load first category
 $.each(result.data,function(key,value){
var links = '';
links += ' <li class=""><a href="" ><i class="fab fa-artstation"></i>&nbsp;'+value.name+'</a></li>';
$("#menu").append(links);
});

 //table for categories
 var tb = '';
  $.each(result.data,function(key,value){
var tb = '';
tb += ' <tr><td>'+value.id+'</td><td>'+value.name+'</td>></tr>';
$("#ctg").append(tb);
});


 //option categories list
 var op = '';
  $.each(result.data,function(key,value){
var op = '';
op += ' <option data-catid="'+value.id+'">'+value.name+'</option></select>';
$("#categories").append(op);
});

//tag line
//load category tagline

$.each(result,function(key,value){
  var specificmenu = '';
var specificmenu2 = '';
//populate category 1
specificmenu += '<span>'+result.data['0'].name+'</span>';
$("#Category1").append(specificmenu);
specificmenu2 += '<span>'+result.data['0'].name+'</span>';
$("#tagline1").append(specificmenu2);
//second category
 var specificmenu3 = '';
 var specificmenu4 = '';
 specificmenu3 += '<span>'+result.data['1'].name+'</span>';
$("#Category2").append(specificmenu3);
specificmenu4 += '<span>'+result.data['1'].name+'</span>';
$("#tagline2").append(specificmenu4);

//third category
   var specificmenu5 = '';
 var specificmenu6 = '';
 specificmenu5 += '<span>'+result.data["2"].name+'</span>';
$("#Category3").append(specificmenu5);
specificmenu6 += '<span>'+result.data["2"].name+'</span>';
$("#tagline3").append(specificmenu6);

//forth category
 var specificmenu7 = '';
 var specificmenu8 = '';
 specificmenu7 += '<span>'+result.data["3"].name+'</span>';
$("#Category4").append(specificmenu7);
specificmenu8 += '<span>'+result.data["3"].name+'</span>';
$("#tagline4").append(specificmenu8);

//fifth category
 var specificmenu9 = '';
 var specificmenu10 = '';
 specificmenu9 += '<span>'+result.data["4"].name+'</span>';
$("#Category5").append(specificmenu9);
specificmenu10 += '<span>'+result.data["4"].name+'</span>';
$("#tagline5").append(specificmenu10);
});

}
});
}

function load_items(Url2){ 

//load items
 $.ajax({
url: Url2, // url where to submit the request
type : "GET", // type of action POST || GET
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
  console.log(result);
$.each(result.data,function(key,value){
  if(value.category_id == 2)
  {
 //electronics
 var pro = '';

  pro += '<div class="col-md-3 vitu " >';
 pro += '<figure class="card card-sm card-product">';
pro  += '<div class="img-wrap"><img src="http://localhost/biashara/public/uploads/' + value.image +'" width="250px" height="150px" class="img-fluid"></div>';
pro += '<figcaption class="info-wrap text-center">';
pro += '<h6 class="title text-truncate"><a href="#"  class="detail" data-id="'+value.product_id+'" >'+value.name+' </a></h6>';
pro += '<strong>'+value.currencyAbbreviation+' '+value.selling_price+'</strong>';
pro  += '<button data-toggle="modal" data-id="'+value.id+'" data-name="'+value.name+'" data-price="'+value.selling_price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right" id="prompt" data-id="'+value.id+'"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
pro += '</figcaption></figure></div>';

$("#item").append(pro);
}
});


if ($('.vitu').length > 4) {
  $('.vitu:gt(3)').hide();
  $('.show-more').show();
}

$('.show-more').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.vitu:gt(3)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
});


//load second category
$.each(result.data,function(key,value){
  if(value.category_id == 1)
  {
var prod = '';
//populate to html product list
 prod += '<div class="col-md-3 vitu1 " >';
 prod += '<figure class="card card-sm card-product">';
prod += '<div class="img-wrap"><img src="http://localhost/biashara/public/uploads/' + value.image +'" width="250px" height="150px" class="img-fluid"></div>';
prod += '<figcaption class="info-wrap text-center">';
prod += '<h6 class="title text-truncate"><a href="#"  class="detail" data-id="'+value.product_id+'" >'+value.name+' </a></h6>';
prod += '<strong>'+value.currencyAbbreviation+' '+value.selling_price+'</strong>';
prod += '<div class="row bts">';
prod += '<div class="col-md-12">';
prod  += '<button data-toggle="modal" data-id="'+value.id+'" data-name="'+value.name+'" data-price="'+value.selling_price+'"  data-target="#exampleModal" class="btn  btn  btn-sm my-cart-btn float-right " id="prompt" data-id="'+value.id+'"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy</button>';
prod  += '<button  data-id="'+value.product_id+'" data-name="'+value.name+'" data-price="'+value.selling_price+'" data-img="'+value.image+'"  class="btn  btn  btn-sm my-cart-btn float-right" id="cart" ><i class="fas fa-shopping-cart"></i> Cart</button>';
prod += '</div>';
prod += '</div>';
prod += '</figcaption></figure></div>';
$("#item1").append(prod);
}
});

if ($('.vitu1').length > 4) {
  $('.vitu1:gt(3)').hide();
  $('.show-more1').show();
}

$('.show-more1').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.vitu1:gt(3)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
});

//load third category
$.each(result.data,function(key,value){
  if(value.category_id == 3)
  { 
var pr = '';
//populate to html product list
   pr += '<div class="col-md-3 vitu2 " >';
 pr += '<figure class="card card-sm card-product">';
pr += '<div class="img-wrap"><img src="http://localhost/biashara/public/uploads/' + value.image +'" width="250px" height="150px" class="img-fluid"></div>';
pr += '<figcaption class="info-wrap text-center">';
pr += '<h6 class="title text-truncate"><a href="#"  class="detail" data-id="'+value.product_id+'" >'+value.name+' </a></h6>';
pr += '<strong>'+value.currencyAbbreviation+' '+value.selling_price+'</strong>';
pr  += '<button data-toggle="modal" data-id="'+value.id+'" data-name="'+value.name+'" data-price="'+value.selling_price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right" id="prompt" data-id="'+value.id+'"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
pr += '</figcaption></figure></div>';    
$("#item2").append(pr);
}
});
if ($('.vitu2').length > 4) {
  $('.vitu2:gt(3)').hide();
  $('.show-more2').show();
}

$('.show-more2').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.vitu2:gt(3)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
});
//load fourth category
$.each(result.data,function(key,value){
  if(value.category_id == 4){
var prod = '';
  prod += '<div class="col-md-3 vitu3">';
  prod+=  '<figure class="card card-sm card-product">';
prod += '<div class="img-wrap"><img src="http://localhost/biashara/public/uploads/' + value.image +'" width="250px" height="150px" class="img-fluid"></div>';
  prod += '<figcaption class="info-wrap text-center">';
prod += '<h6 class="title text-truncate"><a href="#" class="detail" class="detail" data-id="'+value.product_id+'">'+value.name+' </a></h6>';
prod += '<strong>'+value.currencyAbbreviation+' '+value.selling_price+'</strong>';
prod  += '<button data-toggle="modal" data-id="'+value.id+'" data-name="'+value.name+'" data-price="'+value.selling_price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
prod += '</figcaption></figure></div>';        
$("#item3").append(prod);
}
});
if ($('.vitu3').length > 4) {
  $('.vitu3:gt(3)').hide();
  $('.show-more3').show();
}

$('.show-more3').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.vitu3:gt(3)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
});
//load fifth catagory
$.each(result.data,function(key,value){
  if(value.category_id == 5){ 
var prod = '';
//populate to html product list
  prod += '<div class="col-md-3 vitu4">';
  prod+=  '<figure class="card card-sm card-product">';
prod += '<div class="img-wrap"><img src="http://localhost/biashara/public/uploads/' + value.image +'" width="250px" height="150px" class="img-fluid"></div>';
prod += '<figcaption class="info-wrap text-center">';
prod += '<h6 class="title text-truncate"><a href="#"  class="detail" class="detail" data-id="'+value.product_id+'" >'+value.name+' </a></h6>';
prod += '<strong>'+value.currencyAbbreviation+' '+value.selling_price+'</strong>';
prod  += '<button data-toggle="modal" data-id="'+value.id+'" data-name="'+value.name+'" data-price="'+value.selling_price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right" ><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
prod += '</figcaption></figure></div>'; 
$("#item4").append(prod);
}
});
if ($('.vitu4').length > 4) {
  $('.vitu4:gt(3)').hide();
  $('.show-more4').show();
}

$('.show-more4').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.vitu4:gt(3)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
});


}

 

});

}




 
//get recommended products
function load_recomendedproducts(Url3){
		

	  
  $.ajax({
url:Url3,
type : "GET",
dataType : 'json', // data type
contentType: 'application/json',
success:function(data){
//get category name 
console.log(data);
$.each(data.data,function(key,value){
var recommended = '';
//populate to html product list
 recommended += '<div class="col-md-3 vitu5">';
  recommended +=  '<figure class="card card-sm card-product">';
recommended += '<div class="img-wrap"><img src="http://localhost/biashara/public/uploads/' + value.image +'" width="250px" height="150px" class="img-fluid"></div>';
recommended += '<figcaption class="info-wrap text-center">';
recommended += '<h6 class="title text-truncate"><a href="#" class="detail" class="detail" data-id="'+value.product_id+'" >'+value.name+' </a></h6>';
recommended += '<strong>'+value.currencyAbbreviation+' '+value.selling_price+'</strong>';
recommended  += '<button data-toggle="modal" data-id="'+value.id+'" data-name="'+value.name+'" data-price="'+value.selling_price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right" ><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
recommended += '</figcaption></figure>';
 recommended += '</div>'; 
$("#recommended-items").append(recommended);
});

   if ($('.vitu5').length > 4) {
  $('.vitu5:gt(3)').hide();
  $('.show-more5').show();
}

$('.show-more5').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.vitu5:gt(3)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
});

},
error: function(xhr, resp, text) {
    //alert('erro recomendedproducts');
console.log(xhr, resp, text);
}
});
}

//load random products
/*
function load_randomproducts(){
		 
 
$.ajax({
url:'',
type : "GET",
dataType : 'json', // data type
contentType: 'application/json',
success:function(data){
//get category name 


//populate to html product list
 
  $("#soldsize").append(data.shop.soldItemsSize);
  $("#deliverysize").append(data.shop.deliveryItemsSize);

//$("#recommended-items").append(random);
},
error: function(xhr, resp, text) {
    //alert('erro recomendedproducts');
console.log(xhr, resp, text);
}
});
}
*/
function  load_productdetails(Url4){
  $(document).on('click','.detail',function(){ 

    //alert($(this).attr('data-id'));
  var id = $(this).attr('data-id');
var dltUrl = Url4+"/"+id;
$.ajax({
url:dltUrl,
type : "GET", // type of action POST || GET
dataType:"json",
success:function(data){
//get category name 
console.log(data);
$.each(data.data,function(key,value){
var read = '';
//populate to html product details
read += '<div class="row no-gutters"><aside class="col-sm-6 border-right"><article class="gallery-wrap">'; 
read += '<div class="img-big-wrap"><div> <a href="http:://localhost/biashara/public/uploads/'+value.image+'" data-fancybox=""><img src="http://localhost/biashara/public/uploads/'+value.image+'"></a></div></div>'; 
read += '<div class="img-small-wrap"><div class="item-gallery"> <img src="images/items/1.jpg"></div>';
read += '<div class="item-gallery"> <img src="images/items/2.jpg"></div><div class="item-gallery"> <img src="images/items/3.jpg"></div>';
read += '<div class="item-gallery"> <img src="images/items/4.jpg"></div></div></article></aside>';
read += '<aside class="col-sm-6"><article class="p-5"><h3 class="title mb-3">'+value.name+'</h3>';
read += '<div class="mb-3"><var class="price h3 text-warning"><span class="currency">'+value.currencyAbbreviation+'&nbsp;</span><span class="num">'+value.selling_price+'</span></var>'; 
read  += '<span>/per item</span></div> <dl><dt>Description</dt>';
read += '<dd><p>'+value.description+'</p></dd></dl>';
read += '<dd><p><strong>shop Name: &nbsp; </strong>'+value.name+'</p></dd>';	 
read += '<hr><a href="#" class="btn  btn-outline-danger"> <i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now </a></article></aside></div>'; 
$("#divdata").append(read);
$('#myDetail').modal('show'); 

$("#myDetail").on("hidden.bs.modal", function(){
    $("#divdata").html("");
});

 });
 
}

});

});

}

//user
if(localStorage.getItem('objuser') == null)
{

}else{ 
  var user =  JSON.parse(localStorage.getItem('objuser'));
  console.log(user);
   $("#userFullName").append(user.token.user.name);

}

});



