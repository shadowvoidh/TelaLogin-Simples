<?php
session_start();


$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';


if (!empty($username) && !empty($password)) {
    $_SESSION['usuario'] = $username;


    header('Location: dashboard/dashboard.php');
    exit();
} else {

    header('Location: index.html?error=1');
    exit();
}
?>