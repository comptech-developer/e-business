 $(document).ready(function(){  

  const url = "https://a0384310.ngrok.io/paymenttypes";
   const urlcoutry ="https://a0384310.ngrok.io/locallocation"; 
   const urlwarehouse = "https://a0384310.ngrok.io/warehouse"
   const urlsold = "https://a0384310.ngrok.io/saveassold";
 
  $.getJSON(url,function(data){ 
    var pay = JSON.stringify(data);
   localStorage.setItem('pay',pay);

$.each(data.payment,function(key,value){
var pro = '';
pro += '';
pro += '<option data-id="'+value.paymentTypeId+'" data-code="'+value.paymentTypeCode+'" value="'+value.paymentTypeId+'" >'+value.paymentTypeName+'</option>';

$('#option').append(pro);

//console.log(data);
 
});
  // var pesa = $.parseJSON(localStorage.getItem('pay'));
  // console.log(pesa.payment[0].paymentTypeCode);
  $('#exampleModal').on('show.bs.modal', function(e) {
  var product = $(e.relatedTarget).data('id');
  $("#product_id").val(product);
  var pesa = $.parseJSON(localStorage.getItem('pay'));
  $("#pay_id").val(pesa.payment[0].paymentTypeId);
  $("#pay_code").val(pesa.payment[0].paymentTypeCode);


});
   
    var pdata = $.parseJSON(localStorage.getItem('object'));

    $("#search-box").keyup(function(){
     var  typedName = $('#search-box').val();
        var co = { typedName:$('#search-box').val(),
                   countryId:pdata.country[0].countryId }
                 if(typedName == ""){

        $("#suggesstion-box").html('');
          
       $(".fee").hide();
        

      }else { 

        $.ajax({
        type: "POST",
        url: urlcoutry,
        data:JSON.stringify(co),
        contentType: 'application/json',

        beforeSend: function(){
            $("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
        },
        success: function(data){

          console.log(data);
            var objectdelivery = JSON.stringify(data);
      localStorage.setItem('objectdelivery',objectdelivery);
     
  
  
     var pdata = $.parseJSON(localStorage.getItem('objectdelivery'));
  //$('#locationId').val(pdata.country[0].countryId);

   for(var i=0;i<pdata.localLocations.length;i++){
            $("#suggesstion-box").show();
            $("#suggesstion-box").append('<li class="list-group-item" data-id="'+pdata.localLocations[i].locationId+'" data-note="'+pdata.localLocations[i].deliveryFee+'" >'+pdata.localLocations[i].locationName+'</li>');
          
            $("#search-box").css("background","#FFF");
             
        }
       
        }
      
        });
    }
    
     
    
   
        

 $('#suggesstion-box').on('click', 'li', function() {

  var click_text = $(this).text().split('|');
  $("#search-box").val($.trim(click_text[0]));
  $("#locationId").val($(this).attr('data-id'));

  $("#suggesstion-box").html('');
  
   $(".fee").show();
    $("#dvfee").html($(this).attr('data-note'));

     var selectedcolor = $('#option').val(); 

       if(selectedcolor == 3){

         $(".fees").hide();
       }else{  $(".fees").show();}
  

 });
});

    //handle ware house event 
       var user = $.parseJSON(localStorage.getItem('objvrf'));
     $("#warehouse").click(function(){
       //$(".fees").hide();
       var locationId = $('#locationId').val();
        var co = { locationId:$('#locationId').val(),
                   userId:user.user.userId   
                                         }

                   
        $.ajax({
        type: "POST",
        url: urlwarehouse,
        data:JSON.stringify(co),
        contentType: 'application/json',
        beforeSend: function(){
            $("#warehouse").css("background","#FFF url(LoaderIcon.gif) no-repeat 165px");
        },
        success: function(data){
           console.log(data);

           if(locationId == ''){ 
            $('#error').html('this field required');

           }else{ 

              $.each(data.warehouseList,function(index,value){ 
   
            $("#ware-house-list").show();
            $("#ware-house-list").append('<li class="list-group-item" data-id="'+value.warehouseAddress+'"><strong>'+value.warehouseName+'</strong><br>'+value.warehouseAddress+'</li>');
          
            $("#warehouse").css("background","#FFF");
             
        
         });
         }
        }
        });
    


 $('#ware-house-list').on('click', 'li', function(e) {
  var click_text = $(this).text().split('|');
  $("#warehouse").val($.trim(click_text[0]));
  $("#dd").val($(this).attr('data-id'));
  $("#ware-house-list").html('');


 });
});

      //hadle click events 


     $('#option').on('change',function(e){
      e.preventDefault();
  var selection = $(this).val(); 
  console.log("Detected change..." + selection);
  $("#otherFieldDiv").toggle($(this).val()=="3");
  var option = $('option:selected', this).attr('data-id');
  $("#pay_id").val(option);
  var option2 = $('option:selected', this).attr('data-code');
  $("#pay_code").val(option2);
  console.log(option);
  
    $(".test").val("");
           $(".fee").hide();
            $(".fees").hide();


});

if(!$('#option')==0){
var option2 = $('option:selected', this).attr('data-code');
 console.log(option2);
}else{
console.log(1);
}
     

  
 var user = $.parseJSON(localStorage.getItem('objvrf'));
 $("#confirm").click(function(){
        var delivery = { "deliveryInformation":{

              userId:user.user.userId,
          locationId:$('#locationId').val(),
          addressNote:$('#dd').val(),
          paymentTypeId:$("#pay_id").val(),
          paymentTypeCode:$("#pay_code").val()
                  },

                   "sold":[
                       
                       {
                        productId:$('#product_id').val(),
                        userId:user.user.userId

                       }
                   ]
                 }
  console.log(JSON.stringify(delivery));
   $.ajax({
        type: "POST",
        url: urlsold,
        data:JSON.stringify(delivery),
        contentType: 'application/json',
        success: function(data){
           console.log(data);
         
        },
        error: function(xhr, resp, text) {
    //alert('erro saving');
console.log(xhr, resp, text);
        }
               });

});
});
});