 <?php include('header.php');  ?>

<!-- ========================= SECTION MAIN ========================= -->
<section class="section-main bg padding-y-sm">
<div class="container">
 <div class="row">
<div class="col-md-4">
   <!--Card-->
      <div class="card testimonial-card">

        <!--Background color-->
        <div class="card-up teal lighten-2">
        </div>
        <br>

            <h3 class="text-center">Your Progress</h3>
            <!-- custom options -->
            <div class="clearfix">
             	<div  id="custom-color" class="small" style="margin-left: 150px; ">
                
              </div>
				 
            </div>


        <div class="card-body">
          <!--Name-->
          <h4 class="card-title mt-1 text-center"  id="fullname"></h4>
          <hr>
          <p id="phone" class="text-center"></p>
          <!--Quotation-->
          <p  class="text-center">Credit Balance | <span id="balance">  </span></p>
             
        
        </div>

      </div>
      <!--Card-->



</div>
<div class="col-md-8">
  <!-- Classic tabs -->
 <ul class="nav nav-tabs nav-justified md-tabs " id="myTabJust" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab-just" data-toggle="tab" href="#home-just" role="tab" aria-controls="home-just"
      aria-selected="true">Purchased</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="profile-tab-just" data-toggle="tab" href="#profile-just" role="tab" aria-controls="profile-just"
      aria-selected="false">Credits</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab" aria-controls="contact-just"
      aria-selected="false">Setting</a>
  </li>
</ul>
<div class="tab-content card pt-5" id="myTabContentJust">
  <div class="tab-pane fade show active" id="home-just" role="tabpanel" aria-labelledby="home-tab-just">
    <div class="card">

      <div class="card-body">
   
    <table class="table table-hover table-fixed">
      <thead class="black white-text"><tr><th>Product Name</th><th>Selling Price</th><th>Fee Amount</th><th>Reference Number</th><th>paymentStatus</th></tr></thead>
      <tbody id="purch">
        
      </tbody>
    </table>
  </div>
  </div>
  </div>
  <div class="tab-pane fade" id="profile-just" role="tabpanel" aria-labelledby="profile-tab-just">
    <h3 class="text-center">credit list</h3>
    <table class="table">
      <tbody id="tdata">
        
      </tbody>
    </table>
  </div>
  <div class="tab-pane fade" id="contact-just" role="tabpanel" aria-labelledby="contact-tab-just">
    

<header class="card-header " >
<h4 class="card-title mt-2">Update your information</h4>
</header>
<article class="card-body">
<div class="form-group">
<label>Email address</label>
<input type="email" id="email" value="" class="form-control" placeholder="">
</div> <!-- form-group end.// -->
<div class="form-group ">
<label>Phone Number</label>
<input type="text" id="phoneNumber" value="" class="form-control js-typeahead" />
</div> <!-- form-group end.// -->


<div class="form-group">
<button type="submit"  class="btn btn-danger btn-block btn"> save changes  </button>
</div> 
</article> <!-- card-body end .// -->
<div class="border-top card-body text-center"></div>
  </div>
</div>
</div>
<!-- Classic tabs -->
</div>
</div>
</div>
</div><!-- container // -->
</section>
<!-- ========================= SECTION ITEMS .END// ========================= -->

 
 
 
<!-- ========================= SECTION LINKS END.// ========================= -->
 <?php include('footer.php');   ?>