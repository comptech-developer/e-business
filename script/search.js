$(document).ready(function(){
 
  const urlsearch ="https://53394d17.ngrok.io/search"; 
 
   var pdata = $.parseJSON(localStorage.getItem('object'));
    $("#search").keyup(function(e){
      event.preventDefault();
       var text = $('#search').val();
        var co = { countryId:pdata.country[0].countryId,
                  text:$('#search').val(),


                                              }
        $.ajax({
        type: "POST",
        url: urlsearch,
        data:JSON.stringify(co),
        contentType: 'application/json',
      
        success: function(data){

          if(text ==''){ 
               $("#result").html('');

          }else { 
      
 
         var dumb = "";
            for(i=0;i<data.seachResult.length; i++){
            dumb +='<a href="#" data-target="#myDetail" data-toggle="modal" class="list-group-item list-group-item-action detail" data-id="'+data.seachResult[i].productId+'"><img class="img-thumbnail img-sm" src="'+data.seachResult[i].images["0"].imageUrl+'" >'+data.seachResult[i].productName+' |&nbsp; '+data.seachResult[i].price+'</a>';
            $("#result").html(dumb);
            
          console.log(data.seachResult[i].productId); 
        }
      }
        }
        });
    
});
  });