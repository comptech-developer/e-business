$(document).ready(function(){ 
 
 load_profile();
  
function load_profile(){

	 var puser = $.parseJSON(localStorage.getItem('objvrf'));


     $('#fullname').append(puser.user.userFullName);
       $('#phone').append(puser.user.phoneNumber);
       $('#balance').append(puser.user.credits.creditBalance);
       $('#progress').append(puser.user.credits.progress);
       //$('.progress-bar').attr('aria-valuenow',puser.user.credits.progress)

  
}
   
    $(function(){ 
    	 var puser = $.parseJSON(localStorage.getItem('objvrf'));
            $("[id$='circle']").percircle();
            
           
			$("#custom-color").percircle({
				progressBarColor: "#CC3366",
			   percent:puser.user.credits.progress
			});

			
        });
  
 
});
