<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Mensajes</title>
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body style="background: white;">
    <h1>Mensajes Recibidos</h1>
    <table border="1" style="width:100%; border-collapse: collapse;">
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Mensaje</th>
        </tr>
        <?php
        $resultado = mysqli_query($conexion, "SELECT * FROM mensajes");
        while($fila = mysqli_fetch_assoc($resultado)) {
            echo "<tr>
                    <td>{$fila['id']}</td>
                    <td>{$fila['nombre']}</td>
                    <td>{$fila['email']}</td>
                    <td>{$fila['asunto']}</td>
                    <td>{$fila['mensaje']}</td>
                  </tr>";
        }
        ?>
    </table>
    <br>
    <a href="index.php">Volver al Formulario</a>
</body>
</html>