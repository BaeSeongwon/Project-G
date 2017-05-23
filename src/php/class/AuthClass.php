<?php
  require_once '../interface/UserInterface.php';

  class AuthClass implements UserInterface {
    //접근점
    public $userinterface;

    //교환 가능
    function setUser(UserInterface $userinterface){
      $this->userinterface = $userinterface;
    }

    function insertMethod(){
      //델리게이트
      return $this->userinterface->insertMethod();
    }

    function readMethod(){
      return $this->userinterface->readMethod();
    }

    function updateMethod(){

    }

    function loginCheckMethod(){
      return $this->userinterface->loginCheckMethod();
    }
  }
?>
