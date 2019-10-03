$(document).ready(function(){  
 var files = $('#files')[0].files; //where files would be the id of your multi file input
//or use document.getElementById('files').files;

for (var i = 0, f; f = files[i]; i++) {

    var reader = new FileReader();

    reader.onload = function (e) {
        $('#pprev_'+f)
        .attr('src', e.target.result)
        .css("display","block");
        console.log(e.target.result);
    };

    reader.readAsDataURL(f);

}
});
