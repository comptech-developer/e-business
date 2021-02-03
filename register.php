<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="author" content="Bootstrap-ecommerce by Vosidiy">

<title>E-baishara </title>

<link rel="shortcut icon" type="image/x-icon" href="images/esota.ico">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.5/css/mdb.min.css" rel="stylesheet">
<!-- jQuery -->
<script src="js/jquery-2.0.0.min.js" type="text/javascript"></script>

<!-- Bootstrap4 files-->
<script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>

<!-- Font awesome 5 -->


<!-- plugin: owl carousel  -->
<link href="plugins/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
<link href="plugins/owlcarousel/assets/owl.theme.default.css" rel="stylesheet">
<script src="plugins/owlcarousel/owl.carousel.min.js"></script>

<!-- custom style -->
<link href="css/ui.css" rel="stylesheet" type="text/css"/>
<link href="css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />
<link rel="stylesheet" type="text/css" href="dist/jquery.typeahead.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

 </script>
<!-- custom javascript -->
<script src="js/script.js" type="text/javascript"></script>

  <script type="text/javascript" src="dist/jquery.typeahead.min.js"></script>
<script type="text/javascript">
/// some script

// jquery ready start
$(document).ready(function() {
// jQuery code

}); 
// jquery end
</script>
<style>
.frmSearch {border: 1px solid #a8d4b1;background-color: #c6f7d0;margin: 2px 0px;padding:40px;border-radius:4px;}
#country-list{float:left;list-style:none;margin-top:-3px;padding:0;width:190px;position: absolute;}
#country-list li{padding: 10px; background: #f0f0f0; border-bottom: #bbb9b9 1px solid;}
#country-list li:hover{background:#ece3d2;cursor: pointer;}
#search-box{padding: 10px;border: #a8d4b1 1px solid;border-radius:4px;}
</style>

</head>
<body>
<header class="section-header">
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
<a class="navbar-brand" href="#"><img class="logo" src="images/esotalogo.png" alt="alibaba style e-commerce html template file" title="alibaba e-commerce html css theme"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTop">
<ul class="navbar-nav mr-auto">
<li class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">  Language </a>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Swahili</a></li>
<li><a class="dropdown-item" href="#">English </a></li>
</ul>
</li>
<li class="nav-item dropdown"> 
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Trade Assurance </a></li>
<li><a class="dropdown-item" href="#">Arabic</a></li>
<li><a class="dropdown-item" href="#">Logistics Service </a></li>
<li><a class="dropdown-item" href="#">Membership Services</a></li>
</ul>
</li>
<li class="nav-item dropdown"> 
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Help Center</a></li>
<li><a class="dropdown-item" href="#">Submit a Dispute </a></li>
<li><a class="dropdown-item" href="#">For Suppliers </a></li>
</ul>
</li>
</ul>
<ul class="navbar-nav">

<li class="nav-item"><a href="mailto:Helpcenter@esota.com" class="nav-link" > helpcenter@esota.com  </a></li>

</ul> <!-- navbar-nav.// -->
</div> <!-- collapse.// -->
</div>
</nav>


<br><br>

<div class="row">
 
<div class="card col-md-4 " style="margin: 0 auto;padding: 2px 2px 2px 2px;" id="display">
 
<header class="card-header " >
<a href="index" class="float-right btn btn-outline-danger mt-1">Sign In</a>
<h4 class="card-title mt-2">Sign up</h4>
</header>
<article class="card-body">

<div class="form-row">
<div class="col form-group">
<label>First name</label>
<input type="text"  id="firstName" value="" class="form-control" placeholder="">
</div> <!-- form-group end.// -->
<div class="col form-group">
<label>Last name</label>
<input type="text" id="lastName"  value="" class="form-control" placeholder="">
</div> <!-- form-group end.// -->
</div> <!-- form-row end.// -->
<div class="form-group">
<label>Email address</label>
<input type="email" id="email" value="" class="form-control" placeholder="">
<small class="form-text text-muted">We'll never share your email with anyone else.</small>
</div> <!-- form-group end.// -->
<div class="form-group">
<label>PhoneNumber</label>
<input type="email" id="phoneNumber" value="" class="form-control" placeholder="">
<small class="form-text text-muted">We'll never share your phone with anyone else.</small>
</div> 

<div class="form-row">
<div class="form-group col-md-6">
<label>City</label>
<input  type="text" name="countryName"  id="city" class="form-control"  /> 
<input type="hidden" name="countryId" value="" id="countryId" > 
<div id="suggesstion-box"></div>     
</div> <!-- form-group end.// -->
<div class="form-group col-md-6">
<label>Street</label>
<input type="text" id="street" value="" class="form-control js-typeahead" />
</div> <!-- form-group end.// -->
</div> <!-- form-row.// -->


<div class="form-row">
<div class="form-group col-md-6">
<label>Password</label>
<input  type="password" name="password"  id="password" class="form-control"  /> 
<div id="suggesstion-box"></div>     
</div> <!-- form-group end.// -->
<div class="form-group col-md-6">
<label>Confirm Password</label>
<input type="password" id="password_confirmation" value="" class="form-control js-typeahead" />
</div> <!-- form-group end.// -->
</div>

<div class="form-group">
<button type="submit" id="submit" class="btn btn-danger btn-block btn"> Register  </button>
</div> <!-- form-group// -->      
<small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br> Terms of use and Privacy Policy.</small>                                          
 
</article> <!-- card-body end .// -->
<div class="border-top card-body text-center"> <a href="index"></a></div>
</div> <!-- card.// -->
</div>
<br>
<br>

<!-- ========================= SECTION LINKS END.// ========================= -->

<!-- ========================= SECTION SUBSCRIBE ========================= -->
<section class="section-subscribe bg-dark padding-y-lg">
<div class="container">



</div> <!-- container // -->
</section>
<!-- ========================= SECTION SUBSCRIBE END.//========================= -->

<!-- ========================= FOOTER ========================= -->
<footer class="section-footer bg-dark">
<div class="container">
<section class="footer-top padding-top">
<div class="row">
<aside class="col-sm-3 col-md-3 text-white">
<h5 class="title">Customer Services</h5>
<ul class="list-unstyled">
<li> <a href="#">Help center</a></li>
<li> <a href="#">Money refund</a></li>
<li> <a href="#">Terms and Policy</a></li>
<li> <a href="#">Open dispute</a></li>
</ul>
</aside>
<aside class="col-sm-3  col-md-3 text-white">
<h5 class="title">My Account</h5>
<ul class="list-unstyled">
<li> <a href="#"> User Login </a></li>
<li> <a href="#"> User register </a></li>
<li> <a href="#"> Account Setting </a></li>
<li> <a href="#"> My Orders </a></li>
<li> <a href="#"> My Wishlist </a></li>
</ul>
</aside>
<aside class="col-sm-3  col-md-3 text-white">
<h5 class="title">About</h5>
<ul class="list-unstyled">
<li> <a href="#"> Our history </a></li>
<li> <a href="#"> How to buy </a></li>
<li> <a href="#"> Delivery and payment </a></li>
<li> <a href="#"> Advertice </a></li>
<li> <a href="#"> Partnership </a></li>
</ul>
</aside>
<aside class="col-sm-3">
<article class="text-white">
<h5 class="title">Contacts</h5>
<p>
<strong>Phone: </strong> +123456789 <br> 
<strong>Fax:</strong> +123456789
</p>

<div class="btn-group ">
<a class="btn btn-facebook" title="Facebook" target="_blank" href="#"><i class="fab fa-facebook-f  fa-fw"></i></a>
<a class="btn btn-instagram" title="Instagram" target="_blank" href="#"><i class="fab fa-instagram  fa-fw"></i></a>
<a class="btn btn-youtube" title="Youtube" target="_blank" href="#"><i class="fab fa-youtube  fa-fw"></i></a>
<a class="btn btn-twitter" title="Twitter" target="_blank" href="#"><i class="fab fa-twitter  fa-fw"></i></a>
</div>
</article>
</aside>
</div> <!-- row.// -->
<br> 
</section>
<section class="footer-bottom row border-top-white">
<div class="col-sm-6"> 
<p class="text-white-50"> Made with  <br>  said Hussein.</p>
</div>
<div class="col-sm-6">
<p class="text-md-right text-white-50">
Copyright &copy  <br>
<a href="" class="text-white-50">Esota ltd</a>
</p>
</div>
</section> <!-- //footer-top -->
</div><!-- //container -->
</footer>
<!-- ========================= FOOTER END // ========================= -->
<!-- JQuery -->
 <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.5/js/mdb.min.js"></script>
 <script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
 
<script type="text/javascript" src="script/reg.js"></script>
<script>



//USER REGISTER

</script>

</body>
</html>