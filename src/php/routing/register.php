<?php
  header('Access-Control-Allow-Origin: *');
  require_once '../class/AuthClass.php';
  require_once '../class/AdminClass.php';

  $wrap = json_decode(file_get_contents("php://input"),true);

  $register = new AuthClass();
  $admin = new AdminClass();
  // $register->setUser($admin->register($wrap['admin_id'],$wrap['admin_pwd'],$wrap['admin_name'],$wrap['admin_school'],$wrap['admin_tel'],$wrap['admin_email'],$wrap['admin_subname']));

  if($register->insertMethod()){
    echo true;
  }else{
    echo flase;
  }
?>
