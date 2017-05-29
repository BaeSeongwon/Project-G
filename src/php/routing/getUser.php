<?php
  session_start();
  session_write_close();
  require_once '../header.php';
  require_once '../class/AuthClass.php';
  require_once '../class/AdminClass.php';

  $trr = $_SESSION["test"];
  if($_GET["auth"] == $test){
    $login = new AuthClass();
    $login->setUser(new AdminClas);
  }else{
    $login = new AuthClass();
    $login->setUser(new AdminClas);
  }
?>
