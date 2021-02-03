 <?php
  
 require_once('session.php');
 if(isset($_SESSION['id'])){


 }  else { header('location:index');  }
   
  ?>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <?php  include('header.php');  ?>
  <style type="text/css">
        .panel-title {
        display: inline;
        font-weight: bold;
        }
        .display-table {
            display: table;
        }
        .display-tr {
            display: table-row;
        }
        .display-td {
            display: table-cell;
            vertical-align: middle;
            width: 61%;
        }
    </style>

 <section class="section-content padding-y-sm  bg">
<div class="container-fluid"  >

<header class="section-heading heading-line" >
    <h4 class="title-section bg text-uppercase" id="">checkout form</h4>
</header>

<div class="card">
<div class="row no-gutters">
<div class="col-md-12">


<div class="card-body zoom-wrap">

     <!--Main layout-->
  <main class="mt-5 pt-4">
    <div class="container wow fadeIn">

      <!-- Heading -->
      <h2 class="my-5 h2 text-center">Checkout form</h2>

      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-md-8 mb-4">

          <!--Card-->
          <div class="card">

            <!--Card content-->
            <div class="card-body">

              <!--Grid row-->
              <div class="row">

                <!--Grid column-->
                <div class="col-md-6 mb-2">

                  <!--firstName-->
                  <div class="md-form ">
                    <input type="text" id="firstName" class="form-control">
                    <label for="firstName" class="">First name</label>
                  </div>

                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6 mb-2">

                  <!--lastName-->
                  <div class="md-form">
                    <input type="text" id="lastName" class="form-control">
                    <label for="lastName" class="">Last name</label>
                  </div>

                </div>
                <!--Grid column-->

              </div>
              <!--Grid row-->

              <!--Username-->
              <div class="md-form input-group pl-0 mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control py-0" id="email" placeholder="Email" aria-describedby="basic-addon1">
              </div>

              <!--email-->
              <div class="md-form mb-5">
                <input type="text" id="location" class="form-control" placeholder="">
                <label for="email" class="">Location (optional)</label>
              </div>

              <!--address-->
              <div class="md-form mb-5">
                <input type="text" id="street" class="form-control" placeholder="1234 Main St">
                <label for="address" class="">Street</label>
              </div>

              <!--address-2-->
              <div class="md-form mb-5">
                <input type="text" id="delivery_note" class="form-control" placeholder="">
                <label for="address-2" class="">Delivery Note (optional)</label>
              </div>

              <!--Grid row-->
              <div class="row">

                <!--Grid column-->
                <div class="col-lg-4 col-md-12 mb-4">

                  <label for="country">City</label>
                 <input type="text" id="city" class="form-control" placeholder="">
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>

                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4">

                  <label for="state">State</label>
                  <select class="custom-select d-block w-100" id="state" required>
                   
                   
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>

                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-4 col-md-6 mb-4">

                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" id="zipcode" placeholder="" required>
                    <input type="hidden" name="amount" id="payment" value="" >
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>

                </div>
                <!--Grid column-->

              </div>
              <!--Grid row-->

              <hr>

              <div class="custom-control custom-checkbox ">
                <input type="checkbox" class="custom-control-input" id="same-address"> 

                <label class="custom-control-label" for="same-address"> Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info">
                <label class="custom-control-label" for="save-info">Save this information for next time</label>
              </div>

              <hr>

              
            
    <div class="row">
        <div class="col-md-12 ">
            <div class="panel panel-default credit-card-box">
                <div class="panel-heading display-table" >
                    <div class="row display-tr" >
                        <h3 class="panel-title display-td" >Payment Details</h3>
                        <div class="display-td" >                            
                        <img class="img-responsive pull-right" src="https://www.pngitem.com/pimgs/m/368-3685148_mastercard-visa-american-express-png-transparent-png.png">
                        </div>
                    </div>                    
                </div>
                <div class="panel-body">
  
                   
  
                    <div 
                            role="form" 
                             
                            class=" require-validation"
                            data-cc-on-file="false"
                            data-stripe-publishable-key="pk_test_51HugHLHkoFwg6JpzMvcZ9zkRljFvDBv7vsiH8hKRxclMjsmKUeWDWYMyaWTdlq4fsxFANHc1b8ZGGHB5YPB7QaG200ngnlcOnI"
                            id="payment-form">
                        
  
                        <div class='form-row row'>
                            <div class='col-xs-12 form-group required'>
                                <label class='control-label'>Name on Card</label> <input
                                    class='form-control' size='4' type='text'>
                            </div>
                        </div>
  
                        <div class='form-row row'>
                            <div class='col-xs-12 form-group   required '>
                                <label class='control-label'>Card Number</label> 

                          <input  autocomplete='off' class='form-control card-number ' size='20'
                                    type='text'>
                            </div>
                        </div>
  
                        <div class='form-row row'>
                            <div class='col-xs-12 col-md-4 form-group cvc required'>
                                <label class='control-label'>CVC</label> <input autocomplete='off'
                                    class='form-control card-cvc' placeholder='ex. 311' size='4'
                                    type='text'>
                            </div>
                            <div class='col-xs-12 col-md-4 form-group expiration required'>
                                <label class='control-label'>Expiration Month</label> <input
                                    class='form-control card-expiry-month' placeholder='MM' size='2'
                                    type='text'>
                            </div>
                            <div class='col-xs-12 col-md-4 form-group expiration required'>
                                <label class='control-label'>Expiration Year</label> <input
                                    class='form-control card-expiry-year' placeholder='YYYY' size='4'
                                    type='text'>
                            <input type="hidden" name="amount" id="total-value" value="" >
                            </div>
                        </div>
  
                        <div class='form-row row'>
                            <div class='col-md-12 error form-group hide'>
                                <div class='alert-danger alert'>Please correct the errors and try
                                    again.</div>
                            </div>
                        </div>
  
                        <div class="row ">
                            <div class="col-xs-12">
             <button class="btn btn-primary btn-lg btn-block" type="submit" id="submit" >Pay Now (<strong class="total-value"></strong>)</button>
                            </div>
                        </div>
                          
                    </div>
                </div>
            </div>        
        </div>
    </div>

            </div>

          </div>
          <!--/.Card-->

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-4 mb-4">

          <!-- Heading -->
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill" id="sum"></span>
          </h4>

          <!-- Cart -->
          <ul class="list-group mb-3 z-depth-1">
            <div id="item-cart">
            </div>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-Tzs 5</span>
            </li>
      
            <li class="list-group-item d-flex justify-content-between">
              <span >Total (Tzs)</span>
              <strong class="total-value"></strong>
            </li>
          </ul>
          <!-- Cart -->

          <!-- Promo code -->
          <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-secondary btn-md waves-effect m-0" type="button">Redeem</button>
              </div>
            </div>
          </form>
          <!-- Promo code -->

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

    </div>
  </main>
  <!--Main layout-->
 </div>


</div> <!-- col.// -->

</div> <!-- row.// -->

</div> <!-- card.// -->

</div> <!-- container .//  -->
</section>



 
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
  
<script type="text/javascript">
$(function() {
  $(document).on('click','#submit',function(e){ 

     e.preventDefault();
   
    var $form         = $(".require-validation");
   
     
        var $form         = $(".require-validation"),
        inputSelector = ['input[type=email]', 'input[type=password]',
                         'input[type=text]', 'input[type=file]',
                         'textarea'].join(', '),
        $inputs       = $form.find('.required').find(inputSelector),
        $errorMessage = $form.find('div.error'),
        valid         = true;
        $errorMessage.addClass('hide');
  
        $('.has-error').removeClass('has-error');
        $inputs.each(function(i, el) {
          var $input = $(el);
          if ($input.val() === '') {
            $input.parent().addClass('has-error');
            $errorMessage.removeClass('hide');
            e.preventDefault();
          }
        });
   
        if (!$form.data('cc-on-file')) {
          e.preventDefault();
          Stripe.setPublishableKey($form.data('stripe-publishable-key'));
          Stripe.createToken({
            number: $('.card-number').val(),
            cvc: $('.card-cvc').val(),
            exp_month: $('.card-expiry-month').val(),
            exp_year: $('.card-expiry-year').val()
          }, stripeResponseHandler);
        }
  
  
  
  function stripeResponseHandler(status, response) {
        if (response.error) {
            $('.error')
                .removeClass('hide')
                .find('.alert')
                .text(response.error.message);
        } else {
            /* token contains id, last4, and card type */
            var token = response['id'];
              $('#payment').val(token);
               
            $form.find('input[type=text]').empty();
            $form.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
            //$form.get(0).submit();

           console.log(token);

             $.ajax({
    type: 'POST',
    url: 'http://localhost/biashara/public/api/stripes',
    headers: {
      stripeToken:response['id']
    },
    data: {
         number: $('.card-number').val(),
            cvc: $('.card-cvc').val(),
            exp_month: $('.card-expiry-month').val(),
            exp_year: $('.card-expiry-year').val(),
            stripeToken:response['id'],
            amount: $('#total-value').val()
    },

    success: (response) => {
      console.log('successful payment: ', response);
      


 var cart =  JSON.parse(localStorage.getItem('data'));
 var user =  JSON.parse(localStorage.getItem('objuser'));
 var customer_id = user.token.user.customer_id;
 var total =  JSON.parse(localStorage.getItem('total'));
 var delivery = {
  "district_id": "1",
   "location":$('#location').val(),
    "street":$('#street').val(),
    "zipcode":$('#zipcode').val(),
    "delivery_note":$('#delivery_note').val()
 }
  
   var payment_token = $('#payment').val();
       
   
    var order = {
      cart,
      delivery,
      total,
      payment_token,
      customer_id


    }
    console.log(JSON.stringify(order));

    $.ajax({
url: 'http://localhost/biashara/public/api/order', // url where to submit the request
type : "POST",
data :JSON.stringify(order), // type of action POST || GET // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
 processData: false,
success : function(result) {

console.log(result);

 localStorage.removeItem("data");
    window.location.assign('main');
},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}


});
    },
    error: (response) => {
      console.log('error payment: ', response);
    }
  })
        
        }
    }

  });
   
});
</script>













<?php
include('footer.php');
?>