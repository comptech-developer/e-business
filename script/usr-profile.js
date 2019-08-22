$(document).ready(function(){  

 
const url = 'https://8e7de877.ngrok.io/userinformation';
const urlcredit = 'https://8e7de877.ngrok.io/creditlist';
const urlpurchase = 'https://8e7de877.ngrok.io/allpurchases';
 
   var pdata = $.parseJSON(localStorage.getItem('objvrf'));
 
  
$("#user-detail").on('click', function(){
    event.preventDefault();
    var profl = {

   userId:pdata.user.userId,


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
 var prof = JSON.stringify(data);
   localStorage.setItem('prof',prof);
     
  console.log(localStorage.getItem('prof'));

window.location.assign('profile');
console.log(prof);

   var pdata = $.parseJSON(localStorage.getItem('prof'));

   console.log(pdata);

   //$('#userId').html(pdata.userId);


},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})

});
//check credit 
  var credit = {

   userId:pdata.user.userId,


};
// send ajax
$.ajax({
url: urlcredit, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(credit), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
    console.log(result);
    
 var crd = '';
 for(i=0; i<result.creditList.length; i++){ 
     
   crd += '<tr><td>'+result.creditlist[i].length+'</td></tr>';
   $('#tdata').html(crd);
  
} 

},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})
//check purchased
  var credit = {

   userId:pdata.user.userId,


};
// send ajax
$.ajax({
url: urlpurchase, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(credit), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(result) {
    //console.log(result);
 
  var pr = '';
 for(i=0; i<result.purchasedList.length; i++){ 
     
   pr += '<tr><td>'+result.purchasedList[i].productName+'</td>';
   pr += '<td>'+result.purchasedList[i].sellingPrice+'</td>';
   pr += '<td>'+result.purchasedList[i].feeAmount+'</td>';
   pr += '<td>'+result.purchasedList[i].referenceNumber+'</td>';
   pr += '<td>'+result.purchasedList[i].paymentStatus.message+' &nbsp;<i class="fas fa-check"></i></a></td></tr>';
   $('#purch').html(pr);
  
}   

},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})
    
});
