$(document).ready(function(){  

$("#logout").on('click', function(){
    event.preventDefault();
  
	localStorage.clear();
	sessionStorage.clear();

    window.location.replace('index');
});

});
