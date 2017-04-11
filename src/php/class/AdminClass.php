<?php
class Admin{
  string admin_id;
  string admin_pwd;
  string admin_name;
  string admin_school;
  string admin_tel;
  string admin_email;
  string admin_subname;

  function __constructor($id,$pwd,$name,$school,$tel,$email,$subname){
      $this->admin_id = $id;
      $this->admin_pwd = $pwd;
      $this->admin_name = $name;
      $this->admin_school = $school;
      $this->admin_tel = $tel;
      $this->admin_email = $email;
      $this->admin_subname = $subname;
  }
}
?>
