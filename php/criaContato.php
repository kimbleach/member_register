<?php
	//chama o arquivo de conexão com o bd
	include("connect.php");

	$code_mem = $_GET['code_mem'];
	echo $code_mem;
	//$data = json_decode(stripslashes($info));

	//$code_mem = $data->code_mem;

	//consulta sql
	//$query = sprintf("INSERT INTO contact (code_mem) values ('%s')",
	//	mysql_real_escape_string($code_mem));

	//$rs = mysql_query($query);

	//echo json_encode(array(
	//	"success" => mysql_errno() == 0,
	//	"member" => array(
	//		"id" => mysql_insert_id(),
	//		"code_mem" => $code_mem
	//	)
	//));
?>