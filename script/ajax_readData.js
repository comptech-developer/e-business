$(document).ready(function(){

 
const Url= 'https://268f5fb1.ngrok.io/categories';
const Url2 = 'https://268f5fb1.ngrok.io/recomendedproducts';
const Url3 = 'https://268f5fb1.ngrok.io/randomproducts';
 
//initialise function
 
load_recomendedproducts(Url2);
load_productdetails(Url);
load_randomproducts(Url3);
// body -> countryid ->userId
post_data();

function post_data(){

	var pdata = $.parseJSON(localStorage.getItem('object'));
 //var cid=  val(pdata.country[0].countryId);
  //console.log(cid);
  $.ajax({
url: Url, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(pdata.country[0].countryId), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
// you can see the result from the console
// tab of the developer tools
 //load first category
 $.each(result.categories,function(key,value){
var links = '';
links += ' <li class=""><a href="" ><i class="fab fa-artstation"></i>&nbsp;'+value.categoryName+'</a></li>';
$("#menu").append(links);
});

 //table for categories
 var tb = '';
  $.each(result.categories,function(key,value){
var tb = '';
tb += ' <tr><td>'+value.categoryId+'</td><td>'+value.categoryName+'</td>></tr>';
$("#ctg").append(tb);
});

 //option categories list
 var op = '';
  $.each(result.categories,function(key,value){
var op = '';
op += ' <option data-id="'+value.categoryId+'">'+value.categoryName+'</option></select>';
$("#categories").append(op);
});


$.each(result.categories["0"].categoryProductList,function(key,value){
 var pro = '';

pro += '<div class="col-md-3 vitu " >';
pro += '<figure class="card card-sm card-product">';
pro += '<div class="img-wrap"><img src="' + value.images["0"].imageUrl +'" width="300px" height="150px" class="img-fluid"></div>';
pro += '<figcaption class="info-wrap text-center">';
pro += '<h6 class="title text-truncate"><a href="#" data-target="#myDetail" data-toggle="modal" class="detail" data-id="'+value.productId+'" >'+value.productName+' </a></h6>';
pro+= '<strong class="float-left">'+value.currencyAbbreviation+' '+value.price+'</strong>';
pro += '<button data-toggle="modal" id="crt" data-id="'+value.productId+'" data-name="'+value.productName+'" data-price="'+value.price+'"  data-target="#exampleModal" class="btn  btn-md btn-sm float-right"><i class="fas  fa-money-bill-alt" ></i>&nbsp;Buy now</button>';
pro += '</figcaption></figure> </div>';

$("#item").append(pro);
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
$.each(result.categories["1"].categoryProductList,function(key,value){
var prod = '';
//populate to html product list
 prod += '<div class="col-md-3 vitu1 " >';
 prod += '<figure class="card card-sm card-product">';
prod += '<div class="img-wrap"><img src="' + value.images["0"].imageUrl +'" width="250px" height="150px" class="img-fluid"></div>';
prod += '<figcaption class="info-wrap text-center">';
prod += '<h6 class="title text-truncate"><a href="#" data-target="#myDetail" data-toggle="modal" class="detail" data-id="'+value.productId+'" >'+value.productName+' </a></h6>';
prod += '<strong>'+value.currencyAbbreviation+' '+value.price+'</strong>';
prod  += '<button data-toggle="modal" data-id="'+value.productId+'" data-name="'+value.productName+'" data-price="'+value.price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right" id="prompt" data-id="'+value.productId+'"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
prod += '</figcaption></figure></div>';
$("#item1").append(prod);

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
$.each(result.categories["2"].categoryProductList,function(key,value){
var prod = '';
//populate to html product list
  prod += '<div class="col-md-3 vitu2">';
  prod += '<figure class="card card-sm card-product">';
prod += '<div class="img-wrap"><img src="' + value.images["0"].imageUrl +'" width="250px" height="150px" class="img-fluid"></div>';
prod += '<figcaption class="info-wrap text-center">';
prod += '<h6 class="title text-truncate"><a href="#" data-target="#myDetail" data-toggle="modal" class="detail" class="detail" data-id="'+value.productId+'">'+value.productName+' </a></h6>';
prod += '<strong>'+value.currencyAbbreviation+' '+value.price+'</strong>';
prod  += '<button data-toggle="modal" data-id="'+value.productId+'" data-name="'+value.productName+'" data-price="'+value.price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
 prod += '</figcaption></figure></div>';     
$("#item2").append(prod);

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
$.each(result.categories["3"].categoryProductList,function(key,value){
var prod = '';
  prod += '<div class="col-md-3 vitu3">';
  prod+=  '<figure class="card card-sm card-product">';
prod += '<div class="img-wrap"><img src="' + value.images["0"].imageUrl +'" width="250px" height="150px" class="img-fluid"></div>';
  prod += '<figcaption class="info-wrap text-center">';
prod += '<h6 class="title text-truncate"><a href="#" data-target="#myDetail" data-toggle="modal" class="detail" class="detail" data-id="'+value.productId+'">'+value.productName+' </a></h6>';
prod += '<strong>'+value.currencyAbbreviation+' '+value.price+'</strong>';
prod  += '<button data-toggle="modal" data-id="'+value.productId+'" data-name="'+value.productName+'" data-price="'+value.price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
prod += '</figcaption></figure></div>';        
$("#item3").append(prod);

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
$.each(result.categories["4"].categoryProductList,function(key,value){
var prod = '';
//populate to html product list
  prod += '<div class="col-md-3 vitu4">';
  prod+=  '<figure class="card card-sm card-product">';
prod += '<div class="img-wrap"><img src="' + value.images["0"].imageUrl +'" width="250px" height="150px" class="img-fluid"></div>';
prod += '<figcaption class="info-wrap text-center">';
prod += '<h6 class="title text-truncate"><a href="#" data-target="#myDetail" data-toggle="modal" class="detail" class="detail" data-id="'+value.productId+'" >'+value.productName+' </a></h6>';
prod += '<strong>'+value.currencyAbbreviation+' '+value.price+'</strong>';
prod  += '<button data-toggle="modal" data-id="'+value.productId+'" data-name="'+value.productName+'" data-price="'+value.price+'"  data-target="#exampleModal" class="btn  btn  btn-md my-cart-btn float-right" ><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button>';
prod += '</figcaption></figure></div>'; 
$("#item4").append(prod);

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
//load category tagline
var specificmenu = '';
var specificmenu2 = '';
$.each(result,function(key,value){
//populate category 1
specificmenu += '<span>'+result.categories["0"].categoryName+'</span>';
$("#Category1").append(specificmenu);
specificmenu2 += ''+result.categories["0"].tagline+'';
$("#tagline1").append(specificmenu2);
//second category
 var specificmenu3 = '';
 var specificmenu4 = '';
 specificmenu3 += '<span>'+result.categories["1"].categoryName+'</span>';
$("#Category2").append(specificmenu3);
specificmenu4 += '<span>'+result.categories["1"].tagline+'</span>';
$("#tagline2").append(specificmenu4);

//third category
   var specificmenu5 = '';
 var specificmenu6 = '';
 specificmenu5 += '<span>'+result.categories["2"].categoryName+'</span>';
$("#Category3").append(specificmenu5);
specificmenu6 += '<span>'+result.categories["2"].tagline+'</span>';
$("#tagline3").append(specificmenu6);

//forth category
 var specificmenu7 = '';
 var specificmenu8 = '';
 specificmenu7 += '<span>'+result.categories["3"].categoryName+'</span>';
$("#Category4").append(specificmenu7);
specificmenu8 += '<span>'+result.categories["3"].tagline+'</span>';
$("#tagline4").append(specificmenu8);

//fifth category
 var specificmenu9 = '';
 var specificmenu10 = '';
 specificmenu9 += '<span>'+result.categories["4"].categoryName+'</span>';
$("#Category5").append(specificmenu9);
specificmenu10 += '<span>'+result.categories["4"].tagline+'</span>';
$("#tagline5").append(specificmenu10);
});

//load recommended product
 
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
});
}

 
//get recommended products
function load_recomendedproducts(Url2){
		var pdata = $.parseJSON(localStorage.getItem('objvrf'));

		var post = {
			userId:pdata.user.userId,
			countryId:pdata.user.countryId,
			page:0

		};
   
$.ajax({
url:Url2,
type : "POST",
data: JSON.stringify(post), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success:function(data){
//get category name 

$.each(data.recomendedProducts,function(key,value){
var recommended = '';
//populate to html product list
recommended += '<div class="col-md-3"><figure class="card card-product"><div class="img-wrap">'; 
recommended += '<img src="'+value.images["0"].imageUrl+'">';
recommended += '</div><figcaption class="info-wrap">';
recommended += '<h6 class="title text-truncate"><a href="#" data-target="#myDetail" data-toggle="modal" class="detail"  class="detail" data-id="'+value.productId+'" class="title">'+value.productName+'</a></h6><div class="action-wrap">';
recommended += '<button data-toggle="modal" data-id="'+value.productId+'" data-name="'+value.productName+'" data-price="'+value.price+'"  data-target="#exampleModal" class="btn  btn  btn-md  float-right"><i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now</button><div class="price-wrap h5">';
recommended += '<span class="price-new">'+value.currencyAbbreviation+'&nbsp; ' +value.price+'</span></div></div></figcaption></figure></div>'; 

$("#recommended-items").append(recommended);
});
},
error: function(xhr, resp, text) {
    alert('erro recomendedproducts');
console.log(xhr, resp, text);
}
});
}

//load random products
function load_randomproducts(Url3){
		var pdata = $.parseJSON(localStorage.getItem('objvrf'));

		var post = {
			userId:pdata.user.userId,
			countryId:pdata.user.countryId,
			page:0

		};
  // console.log(JSON.stringify(post));
$.ajax({
url:Url3,
type : "POST",
data: JSON.stringify(post), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success:function(data){
//get category name 


//populate to html product list
  $("#cartsize").append(data.shop.cartItemsSize);
  $("#soldsize").append(data.shop.soldItemsSize);
  $("#deliverysize").append(data.shop.deliveryItemsSize);

//$("#recommended-items").append(random);
},
error: function(xhr, resp, text) {
    alert('erro recomendedproducts');
console.log(xhr, resp, text);
}
});
}
function  load_productdetails(){

$.ajax({
url:'',
type : "POST", // type of action POST || GET
dataType:"json",
success:function(data){
//get category name 
$.each(data,function(key,value){
var read = '';
//populate to html product details
read += '<div class="row no-gutters"><aside class="col-sm-5 border-right"><article class="gallery-wrap">'; 
read += '<div class="img-big-wrap"><div> <a href="images/items/1.jpg" data-fancybox=""><img src="images/items/1.jpg"></a></div></div>'; 
read += '<div class="img-small-wrap"><div class="item-gallery"> <img src="images/items/1.jpg"></div>';
read += '<div class="item-gallery"> <img src="images/items/2.jpg"></div><div class="item-gallery"> <img src="images/items/3.jpg"></div>';
read += '<div class="item-gallery"> <img src="images/items/4.jpg"></div></div></article></aside>';
read += '<aside class="col-sm-7"><article class="p-5"><h3 class="title mb-3">'+value.productName+'</h3>';
read += '<div class="mb-3"><var class="price h3 text-warning"><span class="currency">'+value.currencyAbbreviation+'&nbsp;</span><span class="num">'+value.price+'</span></var>'; 
read  += '<span>/per item</span></div> <dl><dt>Description</dt>';
read += '<dd><p>'+value.description+'</p></dd></dl>';
read += '<dd><p><strong>shop Name: &nbsp; </strong>'+value.shopName+'</p></dd>';	 
read += '<hr><a href="#" class="btn  btn-outline-danger"> <i class="fas  fa-money-bill-alt"></i>&nbsp;Buy now </a></article></aside></div>'; 
$("#product_details").append(read);

 });
}
});
}
});
