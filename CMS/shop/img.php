<!DOCTYPE html>
<html>
<head>
	<metea charset="utf8">
	<title></title>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js"></script>
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  </head>
<h1>File Upload</h1>

<input id="files" type="file" name="files[]"  multiple /> <br><br>
<input type="submit" id="add" name="">
	<textarea id="base"></textarea>

	<div id="pprev_"></div>
	<script type="text/javascript">
 
 
	  $('#files').on('change',function(input){
	  	console.log(input.target.files);
  

    	console.log(input.target.files);
        var filesAmount = input.target.files.length;

        for (i = 0; i < filesAmount; i++) {
            var reader = new FileReader();

            reader.onload = function(event) {

            	console.log(event.target.result);
            	var dd = { productImageDataList:[
      {
        productImageData:event.target.result
      },

      ]
    }
      console.log(dd);

          
            }

            reader.readAsDataURL(input.target.files[i]);
        }
    
 
            
	  });
    
	</script>


	


 
</body>
</html>