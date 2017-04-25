<?php
  header('Access-Control-Allow-Origin: *');
  require_once '../class/AuthClass.php';
  require_once '../class/AdminClass.php';

  $wrap = json_decode(file_get_contents("php://input"),true);

  $login = new AuthClass();
  $login->setUser(new AdminClass($wrap));

  if($result = $login->readMethod()){
    echo $result;
  }else{
    echo false;
  }
?>
