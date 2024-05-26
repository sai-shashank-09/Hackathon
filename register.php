<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    if (empty($name) || empty($email)) {
        $error_message = "Name and email are required.";
        header("Location: registration-page.html?error=" . urlencode($error_message));
        exit;
    }
    $pdo = new PDO("mysql:host=localhost;dbname=mydatabase", "username", "password");
    $stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
    $stmt->execute(['name' => $name, 'email' => $email]);
    header("Location: success-page.html");
    exit;
}
?>
