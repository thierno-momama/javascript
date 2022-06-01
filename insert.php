<?php 
// include connexion
include "connexion.inc.php";
//
if(!empty($_POST['name'])){
    $stmt = $bdd->prepare("INSERT INTO nom (name) VALUES (:name)");
    $stmt->bindParam(':name', $_POST['name']);
    $stmt->execute();
    echo"Insertion success";
}else{
    echo"Sasir le nom svp!";
}

