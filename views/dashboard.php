<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: ../public/index.html');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../public/css/tailwind.css" rel="stylesheet">
    <title>Panel de Administración</title>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto mt-10">
        <h1 class="text-3xl font-bold mb-4">Bienvenido, <?php echo $_SESSION['usuario']; ?></h1>
        <nav class="bg-white shadow-md p-4 rounded">
            <ul class="flex space-x-4">
                <li><a href="socios.php" class="text-blue-500">Gestionar Socios</a></li>
                <li><a href="pagos.php" class="text-blue-500">Registrar Pagos</a></li>
                <li><a href="eventos.php" class="text-blue-500">Gestionar Eventos</a></li>
                <li><a href="asistencia.php" class="text-blue-500">Registrar Asistencia</a></li>
                <li><a href="estatus.php" class="text-blue-500">Estatutos</a></li>
            </ul>
        </nav>
    </div>
</body>
</html>