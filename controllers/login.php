<?php
session_start();
include('../config/db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    $query = $conn->prepare("SELECT * FROM socios WHERE usuario = ?");
    $query->bind_param("s", $usuario);
    $query->execute();
    $result = $query->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($contrasena, $user['contrasena'])) {
        $_SESSION['usuario'] = $user['usuario'];
        $_SESSION['rol'] = $user['rol'];
        header('Location: ../views/dashboard.php');
    } else {
        echo "Usuario o contraseña incorrectos.";
    }
}
?>