<?php include('header.php'); ?>
   
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <div class="row">
       
     
        <!-- ./col -->
        
        <!-- ./col -->
      </div>
      <!-- /.row -->
      <!-- Main row -->
      <div class="row">
        <!-- Left col -->
        <section class="col-lg-7 connectedSortable">
          <!-- Custom tabs (Charts with tabs)-->
          <div class="nav-tabs-custom">
            <!-- Tabs within a box -->
            <ul class="nav nav-tabs pull-right">
              <li ><a href="#revenue-chart" data-toggle="tab">Catgories</a></li>
              <li class="active"><a href="#sales-chart" data-toggle="tab">Product </a></li>
              <li class="pull-left header"><i class="fa fa-inbox"></i> Catalog</li>
            </ul>
            <div class="tab-content no-padding">
              <!-- Morris chart - Sales -->
              <div class="chart tab-pane " id="revenue-chart" style="">categories..</div>
              <div class="chart tab-pane active" id="sales-chart" style=""> <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price (TSH.)</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody id="shopproduct">
                  
                  </tbody>
                </table>
              </div></div>
            </div>
          </div>
          <!-- /.nav-tabs-custom -->
        </section>
        <div  class="col-lg-5">
        <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Add product</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <script type="text/javascript">
               $(document).ready(function(){
                 $('#files').on('change',function(input){

                   
      console.log(input.target.files);
  

      console.log(input.target.files);
        var filesAmount = input.target.files.length;

        for (i = 0; i < filesAmount; i++) {
            var reader = new FileReader();

            reader.onload = function(event) {
            $('#base').val(event.target.result);
            var numbers = event.target.result;
            var num = numbers.split(",");
            var nn = num[1];
              //console.log(event.target.result);
              console.log(nn);
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
    
  
           
  
const url = 'http://a1eb414c.ngrok.io/shopaddproduct'; 

 
$("#add").on('click', function(e){

    
    e.preventDefault();
    
   var numbers =$('#base').val();
    var num = numbers.split(",");
            var nn = num[1];
  
              //console.log(numbers.slice(22))
    var profl = {

        productName:$('#productname').val(),
      shopId:1,
      quantity:$('#quantity').val(),
      sellingPrice:$('#price').val(),
      categoryId:$('#categories').val(),
      description:$('#description').val(),
      countryId:"1",
     productImageDataList:[
      {
        productImageData:nn
      }

      ]
};

console.log(JSON.stringify(profl));
// send ajax
$.ajax({
url: url, // url where to submit the request
type : "POST", // type of action POST || GET
data: JSON.stringify(profl), // post data || get data
dataType : 'json', // data type
contentType: 'application/json',
success : function(data) {
 alert('succesfully');
   console.log(data);

},
error: function(xhr, resp, text) {
    alert('erro saving');
console.log(xhr, resp, text);
}
})

});

  }); 

});

  </script>
          
              <div class="box-body">
                <div class="form-group">
                  <input type="hidden" id="id" name="">
                  <label for="exampleInputEmail1">product Name</label>
                  <input type="text" class="form-control" id="productname" value="" placeholder="Enter product">
                </div>
                 <div class="form-group">
                  <label for="exampleInputEmail1">product stock</label>
                  <input type="number" class="form-control" id="quantity" value="" placeholder="Enter quantity">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Price</label>
                  <input type="text" class="form-control" id="price" value="" placeholder="Price">
                </div>
                 <div class="form-group">
                <label>category</label>
                <select class="form-control select2"  id="categories" value="" style="width: 100%;">
                  <option id="1" selected="selected"> 1</option>
                  <option id="2" > 2</option>
                  <option id="3"> 3</option>
                  <option id="4"> 4</option>
                   
                </select>
              </div>
                 <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" id="description" value="" rows="3" placeholder="Enter ..."></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">Upload Image</label>
    <input id="files" type="file" name="files[]" accept=""   multiple />
                  <input type="hidden" id="base" value="" name="">
                    

                  <p class="help-block">Allowed image with white background .</p>
                  <div id="image_preview"></div>
                </div>
                <div class="checkbox">
                  
                </div>
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button type="submit" id="add" class="btn btn-primary">Submit</button>
                <button type="submit" id="save" class="btn btn-primary">Save</button>

              </div>
            
          </div>

        </div>
   
          <!-- Map box -->
          
              </div>
              <!-- /.row -->
    

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <!-- /.content-wrapper -->
<?php include('footer.php'); ?>