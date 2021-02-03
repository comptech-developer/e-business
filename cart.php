<?php  include('header.php');  ?>

   <br>
<br>
 <div class="card" style="margin: 0 auto; width: 50%">
 	<div class="card-body">

<div class="table-responsive">

  <!--Table-->
  <table class="table">

    <!--Table head-->
    <thead>
     <th colspan="3" class="text-center">cart list</th>
    </thead>
    <!--Table head-->

    <!--Table body-->
    <tbody id="cart">
      
      
        
    <!--Table body-->

 
<tfoot>
   <tr><td colspan="5"><button class="btn btn-primary float-right" data-toggle="modal" data-target="#modalRegisterForm">checkout</button></td></tr></tfoot>
  </table>


  <!--Table-->
</div>
</div>
</div>
<div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
     <h3 class="text-center">Add Delivery Information</h3>
         
      </div>
      <div class="modal-body mx-3">
         <select  class="form-control border-top-0 border-left-0 border-right-0" id="option" >
 
                </select>
        <div class="md-form mb-5">
        	  <label>Location (eg. city/region)</label>
          <input  type="text" name="locationName" value="" id="search-box" class="form-control"  /> 
          <input type="hidden" name="locationId" value="" id="locationId"> 
<div id="suggesstion-box"></div> 
        </div>

        <div class="md-form mb-4" id="otherFieldDiv" style="display:none">
          <label for="seeAnotherField" >Select WareHouse</label>
          <input type="text" id="" name="" class="form-control validate" id="otherField" >
      
        </div>

      </div>
      <div class="modal-footer d-flex ">
        <button class="btn btn-light float-left" data-dismiss="modal" aria-label="Close" style="margin-right: 300px;" >Cancel</button> <button class="btn btn-light float-right">Confirm</button>
      </div>
    </div>
  </div>
   <script type="text/javascript">
    $('#option').on('change',function(){
  var selection = $(this).val(); 
  console.log("Detected change..." + selection);
  $("#otherFieldDiv").toggle($(this).val()=="3");
});

</script>
 
</div>
 
<br>
<br>
<?php

include('footer.php');
?>