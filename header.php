  <?php
 require('session.php');
 if(isset($_SESSION['id'])){

//echo $_SESSION['id'];
 }  else { header('location:index');  }
    
  ?>
<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="author" content="Bootstrap-ecommerce by Vosidiy">

<title>Esota </title>

<link rel="shortcut icon" type="image/x-icon" href="images/esota.ico">

<!-- jQuery -->
 <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  -->

 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.5/css/mdb.min.css" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<!-- Bootstrap4 files-->
<script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>

<link rel="stylesheet" href="themes/alertify.core.css" />
  <link rel="stylesheet" href="themes/alertify.default.css" id="toggleCSS" />
<!-- Font awesome 5 -->
<link href="fonts/fontawesome/css/fontawesome-all.min.css" type="text/css" rel="stylesheet">

<!-- plugin: owl carousel  -->
<link href="plugins/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
<link href="plugins/owlcarousel/assets/owl.theme.default.css" rel="stylesheet">
<script src="plugins/owlcarousel/owl.carousel.min.js"></script>

<!-- custom style -->
<link href="css/ui.css" rel="stylesheet" type="text/css"/>
<link href="css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />
     <!-- custom javascript -->
    <link rel="stylesheet" href="css/percircle.css">
<!-- custom javascript -->
 <script type="text/javascript" src="js/percircle.js"></script>
 <script src="js/script.js" type="text/javascript"></script>
   <link href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>

   <script type="text/javascript" src="//code.jquery.com/ui/1.11.1/jquery-ui.js">
</script>

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
 
 
  <style>
  #result {
   position: absolute;
   width: 90%;
   max-width:800px;
   cursor: pointer;
   overflow-y: auto;
   max-height: 400px;
   box-sizing: border-box;
   z-index: 1001;
  }
  .link-class:hover{
   background-color:#f1f1f1;
  }

  @media (min-width: 768px) {
      .modal-xl {
        width: 90%;
       max-width:1200px;
      }
    }
    .error {
  color: red;
  margin-left: 5px;
}
.container-fluid{
  width: 90%;
}
  </style>

</head>
<body>
<header class="section-header">
<nav class="navbar navbar-expand-lg navbar-light">
<div class="container">
<a class="navbar-brand" href="main"><img class="logo" src="images/esotalogo.png" alt="alibaba style e-commerce html template file" title="alibaba e-commerce html css theme"></a>
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

</ul>
<ul class="navbar-nav">

<li class="nav-item"><a href="mailto:Helpcenter@esota.com" class="nav-link" id="delivery-detail" > helpcenter@esota.com  </a></li>

</ul> <!-- navbar-nav.// -->
</div> <!-- collapse.// -->
</div>
</nav>

<section class="header-main shadow-sm ">
<div class="container">
<div class="row-sm align-items-center">

<div class="col-lg-7 col-sm-9">

<div class="input-group w-100">
<select class="custom-select"  name="category_name">
<option value="">All type</option>
<option value="">Special</option>
<option value="">Only best</option>
<option value="">Latest</option>
</select>
 <input type="text" name="search" id="search" style="width: 50%;" 
 placeholder="Search Product Details" class="form-control" />
<div class="input-group-append" >
 
</div>
</div>
<ul class="list-group sh" id="result"></ul>
   <br />

</div> <!-- col.// -->
<div class="col-lg-6 col-sm-8">
<div class="widgets-wrap float-right row no-gutters py-1">
<div class="col-auto">
<div class="widget-header dropdown">
<a href="#" data-toggle="dropdown" data-offset="20,10">
<div class="icontext">
<div class="icon-wrap"><i class="text-danger icon-sm fa fa-user"></i></div>
<div class="text-wrap text-dark" >
<span id="userFullName"></span>
 <i class="fa fa-caret-down"></i> 
</div>
</div>
</a>
<div class="dropdown-menu">
  <li class="list-group-item btn bt-primary" id="user-detail">profile</li>
  <li class="list-group-item btn bt-primary" id="logout"><a class="tooltips" href="logout" style="color: black;">logout</a></li>

</div> <!--  dropdown-menu .// -->
</div>  <!-- widget-header .// -->
</div> <!-- col.// --> 

<div class="col-auto">
<a href="#" class="widget-header">
<div class="icontext">
<div class="icon-wrap"><i class="text-danger icon-sm  fa fa-cogs"></i></div>
<div class="text-wrap text-dark">
<span class="badge  badge badge-dark" id="soldsize"></span>
<div>Pending</div>
</div>
</div>
</a>
</div> <!-- col.// -->
<div class="col-auto" >
<a href="#" class="widget-header dlv">
<div class="icontext">
<div class="icon-wrap" ><i class="text-danger icon-sm  fa fa-truck"></i></div>
<div class="text-wrap text-dark">
<span class=" badge badge-dark" id="deliverysize"  data-target="#myModal" data-toggle="modal"></span>
<div  >Delivery</div>
</div>
</div>
</a>
</div> <!-- col.// -->

<!-- for shop  status-->
<div class="col-auto" id="shopstatus">
<a href="/CMS/shop/index"class="widget-header dlv">
<div class="icontext">
<div class="icon-wrap" ><i class="text-danger icon-sm  fas fa-home"></i></div>
<div class="text-wrap text-dark">
<div  >Shop</div>
</div>


</div>
</a>
</div> <!-- col.// -->
 
</div> <!-- widgets-wrap.// row.// -->
</div> <!-- col.// -->
</div> <!-- row.// -->
</div> <!-- container.// -->
</section> <!-- header-main .// -->
</header> <!-- section-header.// -->