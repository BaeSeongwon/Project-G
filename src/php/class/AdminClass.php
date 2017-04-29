<?php
require_once '../interface/UserInterface.php';

class AdminClass implements UserInterface{
  public $admin_id;
  public $admin_pwd;
  public $admin_name;
  public $admin_school;
  public $admin_tel;
  public $admin_email;
  public $admin_subname;
  public $conn;

  function __construct($param){
    if(count($param) == 2){
      $this->admin_id = $param['admin_id'];
      $this->admin_pwd = $param['admin_pwd'];
    }else if(count($param) == 7){
      $this->admin_id = $param['admin_id'];
      $this->admin_pwd = $param['admin_pwd'];
      $this->admin_name = $param['admin_name'];
      $this->admin_school = $param['admin_school'];
      $this->admin_tel = $param['admin_tel'];
      $this->admin_email = $param['admin_email'];
      $this->admin_subname = $param['admin_subname'];
    }else if(count($param) == 1){
      $this->admin_id = $param['admin_id'];
    }
  }

  public function insertMethod(){
    try{
      $db = new PDO('mysql:host=localhost;dbname=project_g;charset=utf8','root','root');
      $stmt = $db->prepare("INSERT INTO user_admin (admin_id,admin_pwd,admin_name,admin_school,admin_tel,admin_email,admin_subname) VALUES(?,?,?,?,?,?,?)");
      $stmt->execute([$this->admin_id,$this->admin_pwd,$this->admin_name,$this->admin_school,$this->admin_tel,$this->admin_email,$this->admin_subname]);
      $db = null;
      return "success";
    }catch(Exception $e){
      return $e->getMessage();
    }
  }

  public function loginCheckMethod(){
    try{
      $db = new PDO('mysql:host=localhost;project_g;charset=utf8','root','root');
      $stmt = $db->prepare("SELECT *FROM user_admin WHERE admin_id = ?");
      $stmt->execute([$this->admin_id]);
      while($row=$stmt->fetch(PDO::FETCH_OBJ)) {
          return $row->admin_id;
      }
      $db = null;
      return $result;
    }catch(Exception $e){
      return $e->getMessage();
    }
  }

  public function readMethod(){
    $this->conn = mysqli_connect("localhost","root","root","project_g");
    if($this->conn->connect_errno){
      // DB연동 실패
      return false;
    }else{
      // DB 연동 성공
      $query = "select admin_pwd,admin_name from user_admin where admin_id = '$this->admin_id'";

      if($result = $this->conn->query($query)){
        $row = $result->fetch_array(MYSQLI_ASSOC);
        if(!strcmp($row['admin_pwd'],$this->admin_pwd)){
          return $row['admin_name'];
        }
        mysqli_close($this->conn);
        return 'wrong';
      }else{
        return false;
      }
    }
  }

  public function updateMethod(){
    return false;
  }
}
?>
