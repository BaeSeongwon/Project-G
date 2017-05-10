<?php
  session_start();
  require_once '../header.php';
  require_once '../class/AuthClass.php';
  require_once '../class/AdminClass.php';

  $wrap = json_decode(file_get_contents("php://input"),true);

  $login = new AuthClass();
  $login->setUser(new AdminClass($wrap));

  if($result = $login->readMethod()){
    $_SESSION["auth"] = uniqid();
    echo $_SESSION["auth"];
  }else{
    echo false;
  }
?>
