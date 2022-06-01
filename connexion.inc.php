<?php 

try{
    // bdd
    $bdd = new PDO('mysql:host=localhost;dbname=test;charset=UTF8', 'root', '');
}catch(Exception $e){
    print('Erreur: '.$e->getMessage());
    die();
}