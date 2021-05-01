$(document).ready(function(){  

$("#logout").on('click', function(){
    event.preventDefault();
  
	localStorage.clear();
	sessionStorage.clear();
      $.ajax({
                url: './logout.php', // url where to submit the request
                type : "POST", // type of action POST || GET
                dataType : 'text',

                success:function(data){
                  window.location.replace('main');
                    console.log(data);
                }

            });

   
});

});
