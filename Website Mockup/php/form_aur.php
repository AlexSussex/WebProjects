<?php

$titlu = $_POST['titlu'];
$gramaj = $_POST['aur_gramaj'];

if ($titlu=="12K") {
	$_POST['aur_gramaj_rezultat']=85*10;
	echo $_POST['aur_gramaj_rezultat'].'ron.' ;
}
else
	echo "WTF";


?>