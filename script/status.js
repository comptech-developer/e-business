$(document).ready(function(){

 
const urldelivery = 'https://a1eb414c.ngrok.io/deliverylist';
const urlpending = 'https://a1eb414c.ngrok.io/pendingreferencelist';
 
var pdata = $.parseJSON(localStorage.getItem('objvrf'));

$("#deliverysize").mouseenter(function(){

   $("#myModal").modal('show');

   // e.preventDefault();
   

    var deliv = {

   userId:pdata.user.userId,


};
// send ajax
$.ajax({
url: urldelivery, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(deliv), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
  
  var dv = '';
 for(i=0; i<data.deliveries.length; i++){ 

 
    
   dv += '<tr></td><td>'+data.deliveries[i].locationName+'</td>';
   dv += '<td>'+data.deliveries[i].address_note+'</td>';
   dv += '<td>'+data.deliveries[i].deliveryTime+'</td>';
   dv += '<td>'+data.deliveries[i].referenceNumber+'</td></tr>';
  
   $('#app').html(dv);
   $("#myModal").modal('show');
   // e.preventDefault();
  console.log(data);
 

 }

  console.log(data);
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})


});

//pending reference list

$("#soldsize").mouseenter(function(){

  // $("#myModal").modal('show');

   // e.preventDefault();
   

    var pendin = {

   userId:pdata.user.userId,


};
// send ajax
$.ajax({
url: urlpending, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(pendin), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
  //pendingModal
  var pn = '';
   
 for(i=0; i<data.pendingReferenceList.length; i++){   
   pn += '<tr><td>'+data.pendingReferenceList[i].quantity+'</td>';
   pn += '<td>'+data.pendingReferenceList[i].paymentStatus.message+'</td>';
   pn += '<td>'+data.pendingReferenceList[i].totalAmount+'</td>';
   pn += '<td>'+data.pendingReferenceList[i].referenceNumber+'</td></tr>';
  
   $('#pen').html(pn);
   $("#pendingModal").modal('show');
   // e.preventDefault();
  console.log(data);
 

 }

  console.log(data);
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})


});


});