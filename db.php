<?php

    $con = mysqli_connect("localhost","root", "", "loginsystem");
    if (mysqli_connect_errno()){
    echo "failed to connect to MySQL: " . mysqli_connect_error();
    }
?>