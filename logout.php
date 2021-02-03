<?php
session_start();
session_unset();
session_destroy();
ob_start();
header("location:main");
ob_end_flush();
exit();

 $data = "<script>document.write(localStorage.clear());</script>";
  $data2 = "<script>document.write(sessionStorage.clear());</script>";
 
?>

 