<?php

include "config.php";

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;

// Fetch All records
if($request == 1){
  $interventionData = mysqli_query($con,"select * from intervention order by id desc");

  $response = array();
  while($row = mysqli_fetch_assoc($interventionData)){
    $response[] = $row;
  }

  echo json_encode($response);
  exit;
}

// Add record
if($request == 2){
  $date = $data->date;
  $nameDemandeur = $data->nameDemandeur;
  $surnameDemandeur = $data->surnameDemandeur;
	$company = $data->company;
	$email = $data->email;
	$number = $data->number;
	$address = $data->address;
	$nameIntervenant = $data->nameIntervenant;
	$surnameIntervenant = $data->surnameIntervenant;
	$isSigned = $data->isSigned;

  mysqli_query($con,"INSERT INTO intervention(`date`, `nameDemandeur`, `surnameDemandeur`,`company`, `email`, `number`, `address`, `nameIntervenant`, `surnameIntervenant`, `isSigned`) VALUES('".$date."','".$nameDemandeur."','".$surnameDemandeur.",
	'".$company."',".$email."','".$number."','".$address.",".$nameIntervenant."','".$surnameIntervenant."','".$isSigned."')");

  exit;
}

// Update record
if($request == 3){

  $id = $data->id;
	$date = $data->date;
  $nameDemandeur = $data->nameDemandeur;
  $surnameDemandeur = $data->surnameDemandeur;
	$company = $data->company;
	$email = $data->email;
	$number = $data->number;
	$address = $data->address;
	$nameIntervenant = $data->nameIntervenant;
	$surnameIntervenant = $data->surnameIntervenant;
	$isSigned = $data->isSigned;

  mysqli_query($con,"UPDATE `intervention` SET `company`='".$company."', `nameDemandeur`='".$nameDemandeur."',
	,`surnameDemandeur`='".$surnameDemandeur."',`$email`='".$email."', `$number`='".$number."' ,
	`name$addressDemandeur`='".$address."',`$nameIntervenant`='".$nameIntervenant."',`$surnameIntervenant`='".$surnameIntervenant."'
	,isSigned ='".$isSigned."' WHERE id=".$id);

  echo "Update successfully";
  exit;
}

// Delete record
if($request == 4){
  $id = $data->id;

  mysqli_query($con,"DELETE FROM intervention WHERE id=".$id);

  echo "Delete successfully";
  exit;
