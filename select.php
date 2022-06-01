<?php 
// include connexion
include "connexion.inc.php";
//
$sth = $bdd->query('SELECT * FROM nom');
$rows = $sth->fetchAll();
echo json_encode($rows);