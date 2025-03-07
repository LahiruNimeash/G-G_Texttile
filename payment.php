<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "payments";  // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $card_holder = $_POST['card_holder'];
    $card_number = $_POST['card_number'];
    $expiry_date = $_POST['expiry_date'];
    $cvc = $_POST['cvc'];

    // SQL query to insert data into database
    $sql = "INSERT INTO payment_details (card_holder, card_number, expiry_date, cvc) VALUES ('$card_holder', '$card_number', '$expiry_date', '$cvc')";

    if ($conn->query($sql) === TRUE) {
        echo "Payment details saved successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    // Close connection
    $conn->close();
}
?>