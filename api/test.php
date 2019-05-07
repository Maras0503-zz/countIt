<?php
    //SELECT INFORMATION ABOUT PRODUCTS
    $query = "select * from user_tab";        
    
    function select($query){
        include('connect.php');
        $returnArray = array();
        $fetch = $mysqli->query($query); 
            while ($row = $fetch->fetch_array()) {
                $rowArray['user_id'] = $row['user_id'];
                $rowArray['user_fname'] = $row['user_fname'];
                array_push($returnArray,$rowArray);
            }
            $mysqli->close();
        return $returnArray;
    }   
    
    echo json_encode(select($query));