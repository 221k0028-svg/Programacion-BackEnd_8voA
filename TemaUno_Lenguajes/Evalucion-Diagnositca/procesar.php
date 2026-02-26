<?php
// 1. Conectar a la base de datos
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 3. Recibir datos y limpiar
    $nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
    $apellido = mysqli_real_escape_string($conexion, $_POST['apellido']);
    $email = mysqli_real_escape_string($conexion, $_POST['email']);
    $mensaje = mysqli_real_escape_string($conexion, $_POST['mensaje']);
    $query_type = isset($_POST['query']) ? $_POST['query'] : 'No especificado';

    // Combinar nombre y apellido para la base de datos
    $nombre_completo = $nombre . " " . $apellido;

    // 4. La Consulta SQL 
    $sql = "INSERT INTO mensajes (nombre, email, asunto, mensaje, fecha_envio) 
            VALUES ('$nombre_completo', '$email', '$query_type', '$mensaje', NOW())";

    // 5. Ejecutar y verificar
    if (mysqli_query($conexion, $sql)) {
        
        header("Location: index.php?enviado=1");
        exit(); 
    } else {
        
        echo "<h3>Error detectado:</h3>";
        echo "Mensaje: " . mysqli_error($conexion);
        exit();
    }
} else {
    echo "No se recibieron datos por POST.";
}
?>
