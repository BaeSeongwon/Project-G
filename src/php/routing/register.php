<?php
  header('Access-Control-Allow-Origin: *');
  require_once '../class/AuthClass.php';
  require_once '../class/AdminClass.php';

  $wrap = json_decode(file_get_contents("php://input"),true);

  $register = new AuthClass();
  $register->setUser(new AdminClass($wrap));

  if($register->insertMethod() == "success"){
    echo true;
  }else{
    echo false;
  }
?>
