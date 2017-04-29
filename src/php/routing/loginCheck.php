<?php
  header('Access-Control-Allow-Origin: *');
  require_once '../class/AuthClass.php';
  require_once '../class/AdminClass.php';

  $wrap = json_decode(file_get_contents("php://input"),true);

  $loginCheck = new AuthClass();
  $loginCheck->setUser(new AdminClass($wrap));

  if($loginCheck->loginCheckMethod() == "true"){
    echo true;
  }else{
    echo false;
  }
?>
