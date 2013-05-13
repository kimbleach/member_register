<?php // <meta http-equiv="Content-Type" content="text/html; charset=tis-620" />
// <meta http-equiv="Content-Type" content="text/html; charset=windows-874" />
?>


<?php
	header('Content-type: application/json; charset=utf-8');
    
	
	include("connect.php");
	mysql_query("SET NAMES UTF8");
	//$start = $_REQUEST['name'];
	$queryString = "SELECT CONCAT(
					mem_branch.branch,'  ',
					mem_branch.zone,'  ',
					mem_branch.province) as branch,
					mem_branch.id
					FROM
					mem_branch";
	$query = mysql_query($queryString) or die(mysql_error());
	$contatos = array();
	while($contato = mysql_fetch_assoc($query)) {
	    $contatos[] = $contato;
			}

	
	//consulta total de linhas na tabela
	//$queryTotal = mysql_query("SELECT count(*) as num FROM mem_member_register WHERE name Like '%$start%' or  id Like '%$start%' or  tsic_code Like '%$start%' or  description Like '%$start%'") or die(mysql_error());
	//$row = mysql_fetch_assoc($queryTotal);
	//$total = $row['num'];
	//var_dump($contatos);
	//echo "|".var_export($contatos,true)."|";

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		//"total" => $total,
		"contacts" => $contatos
	),JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	//),JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	// อันนี้แปลงให้เป็นภาษาไทยแล้ว แสดง 
	/*   old data
	echo 'Hello world</br>';
	include("connect.php");
		echo 'Hello world5</br>';
	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

    echo $start."hello 3333".$limit;
	$queryString = "SELECT * FROM tsic_type LIMIT $start,  $limit";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$contatos = array();
	while($contato = mysql_fetch_assoc($query)) {
	    $contatos[] = $contato;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM contact') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"contacts" => $contatos
	));
	*/
?>