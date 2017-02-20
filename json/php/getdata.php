<?php
	include_once "serverdata.php";
	# connect mySQLserver(local)
	$connection = mysqli_connect($host, $username, $passwd, $dbname) or die("Error " . mysqli_error($connection));
	$sql = "select * from student";
	$result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
	$emparray = array();

	while($row = mysqli_fetch_assoc($result))
	{
		$emparray[] = $row;
	}

	echo json_encode($emparray);

	# close the db connection
	mysqli_close($connection);
?>
