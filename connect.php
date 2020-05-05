<?php
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password_1 = $_POST['password_1'];

	// ბაზასთან კავშირი 
	$conn = new mysqli('localhost','root','','form');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into reg(username, email, password_1) values(?, ?, ?)");
		$stmt->bind_param("sss", $username, $email, $password_1);
		$execval = $stmt->execute();
		echo $execval;
		echo "თქვენ წარმატებით დარეგისტრირდით...";
		$stmt->close();
		$conn->close();
	}
?>