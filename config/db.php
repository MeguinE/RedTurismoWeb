<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'sistema_turismo';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}
?>