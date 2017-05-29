<?php
  session_start();
  session_write_close();
  require_once '../header.php';
  require_once '../class/AuthClass.php';
  require_once '../class/AdminClass.php';

  $wrap = json_decode(file_get_contents("php://input"),true);

  $login = new AuthClass();
  $login->setUser(new AdminClass($wrap));

  if($result = $login->readMethod()){
    $_SESSION["test"] = uniqid();
    echo $_SESSION["test"];
  }else{
    echo false;
  }
?>
