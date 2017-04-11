<?php
interface UserInterface{
  public function insertMethod(object $param):boolean;
  public function readMethod(object $param):boolean;
  public function updateMethod(object $param):boolean;
}
?>
