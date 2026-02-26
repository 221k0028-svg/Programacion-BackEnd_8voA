<?php

$host = "sql200.infinityfree.com";
$user = "if0_41118946";
$pass = "tuxmSfeOTwmvK";
$db   = "if0_41118946_db_formulario"; 

$conexion = mysqli_connect($host, $user, $pass, $db);

if (!$conexion) {
    die("Fallo la conexión: " . mysqli_connect_error());
}

?>

