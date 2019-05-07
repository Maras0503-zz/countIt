<?php
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);
$login = $input['login'];
$pass = $input['pass'];

//CHECK IS USER EXIST AND RETURN TOKEN
$query = "select user_id from user_tab where user_email='".$login."' and user_pass='".$pass."' limit 1";
function select($query){
    include('connect.php');
    $returnArray = array();
    $fetch = $mysqli->query($query); 
    while($row = $fetch->fetch_array()) {
        $rowArray['user_id'] = $row['user_id'];
        array_push($returnArray,$rowArray);
    }
    $mysqli->close();
    return $returnArray;
}
echo json_encode(select($query));